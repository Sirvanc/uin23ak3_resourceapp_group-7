import React from "react";
import { useState } from "react";
import { resources } from "../assets/ressurser.js";

export default function Nav() {
  const [activeTag, setActiveTag] = useState("html");

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
          <p>{tag}</p>
        </button>
      ))}
    </ul>
  );
}
