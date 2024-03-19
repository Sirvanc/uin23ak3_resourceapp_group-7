import { resources } from "../assets/ressurser.js";

export default function Resources(props) {
  const { activeTab } = props;

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
