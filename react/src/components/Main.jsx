import React from "react";
import { resources } from "../assets/ressurser.js";

export default function Main({ category }) {
    const filteredResources = resources.filter(resource => resource.category === category);

    return (
        <main>
            <article>
                <div>
                    <h2>Resources {category}</h2>
                    <ul>
                        {filteredResources.map(resource => (
                            <li key={resource.id}>
                                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                    {resource.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </main>
    );
}
