import React from "react";
import { resources } from "../assets/ressurser.js";

export default function Main({ category }) {
    const filteredResources = resources.filter(resource => resource.category === category);
    const uppercaseCategory = category.toUpperCase(); // Convert category to uppercase

    return (
        <main>
            <article>
                <div>
                    {/* Render the category name in uppercase */}
                    <h2>Resources {uppercaseCategory}</h2>
                    
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
/** Funksjonen Main definerer React-komponent Main  som tar imot category som en prop.
 * Inni funksjonen filtreres ressursene basert på den gitte kategorien.
 * Dette gjøres ved å bruke filter-metoden på resources-arrayen. 
 * Den filtrerte listen lagres i filteredResources.
 * Kategorien konverteres til store bokstaver ved hjelp av toUpperCase()-metoden, og resultatet lagres 
 * i variabelen uppercaseCategory.
 * Funksjonen Main defineres som en React-komponent som tar imot category som en prop.
 * Inni funksjonen filtreres ressursene basert på den gitte kategorien. 
 * Dette gjøres ved å bruke filter-metoden på resources-arrayen. Den filtrerte listen lagres i filteredResources.
 * Kategorien konverteres til store bokstaver ved hjelp av toUpperCase()-metoden,
 og resultatet lagres i variabelen uppercaseCategory. */