// Nav.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { resources } from "../assets/ressurser.js";


export default function Nav() {
  const [activeTag, setActiveTag] = useState(null);

  const uniqueTags = [];
  resources.forEach((category) => {
    if (uniqueTags.indexOf(category.category) === -1) {
      uniqueTags.push(category.category);
    }
  });

  return (
    <ul>
      {uniqueTags.map((tag) => (
        <button
          key={tag}
          className={activeTag === tag ? "active" : ""}
          onClick={() => setActiveTag(tag)}
        >
          <Link to={`/${tag}`} style={{ textTransform: 'uppercase' }}>
            {tag.toUpperCase()}
          </Link>
        </button>
      ))}
    </ul>
  );
}
