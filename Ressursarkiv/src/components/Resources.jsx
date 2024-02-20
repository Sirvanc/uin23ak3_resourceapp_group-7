import React from "react";
import { Resources } from '../assets/ressurser.js';

function Resources(props) {

    const category = props.category;
    const filteredResourrces = resources.filter(resource => resource.category === category);

    return (
        <div className="resourceBody">
            <h1> Resources for {category}</h1>
            <ul>
                {filteredResourrces.map((resource, index) => (
                    <li key={index}><a href={resource.url}>{resource.title}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default Resources;