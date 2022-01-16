import React, { useState } from 'react';
import { data } from './Data';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';


export default function Portfolio() {
    const [projects, setProjects] = useState(data);
    const [selected, setSelected] = useState("All");

    const onSelectFilter = (category) => {
        setSelected(selected => selected = category);
        category === "All" ? setProjects(data) : setProjects(data.filter((image) => image.category === category));
    }

    return (
        <div className="container">
            <Toolbar filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={selected}
                onSelectFilter={onSelectFilter} />
            <ProjectList projects={projects} />
        </div>
    )
}