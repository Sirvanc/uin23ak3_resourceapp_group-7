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
  <nav className="nav-container">
    <ul>
      {uniqueTags.map((tag) => (
        <button
          key={tag}
          className={activeTag === tag ? "nav-button active" : "nav-button"}
          onClick={() => setActiveTag(tag)}
        >
          <Link to={`/${tag}`} style={{ textTransform: 'uppercase' }}>
            {tag.toUpperCase()}
          </Link>
        </button>
      ))}
      </ul>
  </nav>
  );
}
