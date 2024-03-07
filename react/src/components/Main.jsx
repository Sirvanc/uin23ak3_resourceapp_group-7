import React, { useState, useEffect } from 'react';
import { getResources } from './ressurser.js'; // Antar at getResources funksjonen eksisterer og returnerer en liste over ressurser

function Main(props) {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Kjører når komponenten blir montert (mount) og når resources endrer seg
    const fetchedResources = getResources(); // Henter ressursene fra ressurser.js
    setResources(fetchedResources); // Setter ressursene i state
  }, []); // Tomt avhengighetsarray betyr at denne effekten kun kjøres ved montering

  return (
    <div>
      <h1>Ressurser</h1>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>{resource.name}</li> // Antar at hver ressurs har et navn (name)
        ))}
      </ul>
    </div>
  );
}


