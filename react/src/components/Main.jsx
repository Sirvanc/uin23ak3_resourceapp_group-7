import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { resources } from "../assets/ressurser.js";

export default function Resources(props) {
  const { activeTab, category } = props;
  console.log("main", activeTab, category);

  const { slug } = useParams();
  const [resource, setResource] = useState();

  return (
    <section>
      <h2>{activeTab}</h2>
      <ul>
        {resources
          .filter((source) => source.category === activeTab)
          .map((source, index) => (
            <li key={index}>
              <a href={source.url}>{source.title}</a>
            </li>
          ))}
      </ul>
    </section>
  );
}
