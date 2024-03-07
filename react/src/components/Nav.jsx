import React from "react";
import { useState } from "react";
import { resources } from "../assets/reassures.js";

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
          <a href={`#${tag}`}>{tag}</a>
        </button>
      ))}
    </ul>
  );
}

/*Denne komponenten lager en enkel navigasjonsmeny med knapper for hver kategori som
brukeren kan velge. Når en kategori blir valgt, kan en tilpasset funksjon bli kalt for å
utføre relevante handlinger,for eksempel å oppdatere visningen av ressurser knyttet til den valgte kategorien.*/