import React from "react";

export default function Nav({ categories, onSelect }) {
  return (
    <nav>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <button onClick={() => onSelect(category)}>
              {category.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
