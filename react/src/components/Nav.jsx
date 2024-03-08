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

/*Denne komponenten lager en enkel navigasjonsmeny med knapper for hver kategori som
brukeren kan velge. Når en kategori blir valgt, kan en tilpasset funksjon bli kalt for å
utføre relevante handlinger,for eksempel å oppdatere visningen av ressurser knyttet til den valgte kategorien.*/