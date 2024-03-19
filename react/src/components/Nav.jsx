import React, { useState } from "react";
import { resources } from "../assets/ressurser.js";
import { Link } from "react-router-dom";

export default function Nav({ activeTag, setActiveTag }) {
  const uniqueTags = [];

  resources.forEach((category) => {
    if (uniqueTags.indexOf(category.category) === -1) {
      uniqueTags.push(category.category);
    }
  });

  return (
    <>
      <nav>
        <ul>
          {uniqueTags.map((tag) => (
            <Link
              to={`/${tag}`}
              key={tag}
              className={activeTag === tag ? "active" : ""}
              onClick={() => setActiveTag(tag)}
            >
              <p>{tag}</p>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}
