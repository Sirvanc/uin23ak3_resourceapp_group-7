import React from "react";
import { resources } from "../assets/reassures";

export default function Main({ activeTag }) {
  const filteredResources = activeTag
    ? resources.filter((resource) => resource.category === activeTag)
    : resources;

  return (
    <>
      <div>
        <h1>Resources</h1>
        <ul>
          {filteredResources.map((resource) => (
            <li key={resource.id}>{resource.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
