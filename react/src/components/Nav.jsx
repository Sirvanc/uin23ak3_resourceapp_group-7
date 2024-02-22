import React from "react";
import {resources} from "../assets/ressurser.js"

export default function Nav() {

const navCategory = resources.filter(category => category.category)
console.log(navCategory)

const uniqueTags = [];
resources.forEach(category => {
    if (uniqueTags.indexOf(category.category) === -1) {
        uniqueTags.push(category.category);
    }
});

return (
    <> 
        <ul>
            {uniqueTags.map(tag => <li key={tag}><a href={`#${tag}`}>{tag}</a></li>)}      
        </ul>
    </>
    );
    }

