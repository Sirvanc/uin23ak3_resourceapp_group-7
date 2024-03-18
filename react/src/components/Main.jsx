import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";

export default function Resources({ activeTag, resources, category }) {
  const { slug } = useParams();
  const [resource, setResource] = useState();
  console.log("main", activeTag);

  useEffect(() => {
    console.log(resources);
    console.log("Current slug:", slug);
    if (resources && category) {
      const filteredResource = resources.find((res) =>
        res.category.toLowerCase().includes(category.toLowerCase())
      );
      setResource(filteredResource || {});
    }
  }, [resources, category]);
  console.log(resource);

  return (
    <section>
      <h2>{resource?.category}</h2>
      <p>{resource?.text}</p>
      <ul>
        {resource?.sources?.map((source, index) => (
          <li key={index}>
            <a href={source.url}>{source.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
/**
 * const { slug } = useParams();
Her hentes slug fra useParams()-hooket. Dette antyder at komponenten bruker 
React Router og henter en parameter fra ruten. useParams()-hooket gir tilgang til 
ruteparametrene definert i ruten.
const [resource, setResource] = useState();
Her deklareres en lokal tilstand resource ved hjelp av useState()-hooket. 
resource vil inneholde dataen for ressursen som skal vises.


  useEffect(() => {
    console.log(resources)
    console.log("Current slug:", slug);
    if (resources && category) {
      const filteredResource = resources.find(res => res.category.toLowerCase().includes(category.toLowerCase()));
      setResource(filteredResource || {});
    }
  }, [resources, category]); 
Denne useEffect()-blokken kjører en effektfunksjon hver gang resources eller category endres. Inni effektfunksjonen logges resources og slug, og deretter blir ressursen filtrert basert på category og satt ved hjelp av setResource()-funksjonen.
console.log(resource)
Dette logger ressursen til konsollen. Dette vil bli kalt hver gang komponenten blir rendret.


  return (
    <section>
          <h2>{resource?.category}</h2>
          <p>{resource?.text}</p>
          <ul>
            {resource?.sources?.map((source, index) => (
              <li key={index}>
                <a href={source.url}>{source.title}</a>
              </li>
            ))}
          </ul>
    </section>
  );
Her returneres JSX som definerer strukturen til komponenten. 
Den viser ressurserens kategori, tekst og en liste over kilder (hvis det finnes). ?.-operatorer 
brukes for å unngå feil hvis resource eller sources er undefined eller null. map()-metoden brukes 
til å generere listeelementer for hver kilde i resource.sources. Hvert listeelement inneholder en
 ankerlenke (<a>) som fører til kildenens URL og viser kildens tittel. Hvert listeelement er gitt
  en unik nøkkel (key) basert på index-verdien i kartleggingsfunksjonen.
*/
