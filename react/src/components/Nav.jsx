import React, { useState } from "react";
import { resources } from "../assets/ressurser";

export default function Nav({ activeTag, setActiveTag }) {
  const uniqueTags = [];

  resources.forEach((category) => {
    if (uniqueTags.indexOf(category.category) === -1) {
      uniqueTags.push(category.category);
    }
  });

  return (
    <>
      <ul>
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            className={activeTag === tag ? "active" : ""}
            onClick={() => setActiveTag(tag)}
          >
            <p>{tag.toUpperCase()}</p>
          </button>
        ))}
      </ul>
    </>
  );
}