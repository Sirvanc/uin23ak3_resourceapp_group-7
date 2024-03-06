import React from "react";
import { resources } from "../assets/ressurser.js";

export default function Main({ category }) {
    const filteredResources = resources.filter(resource => resource.category === category);
    const uppercaseCategory = category.toUpperCase(); // Konverter kategori til store bokstaver (uppercase)

export default function Main() {
    return (
        <div className='ressouceBody'>
            <h1>Ressursarkiv </h1>
        </div>
    
    );
}