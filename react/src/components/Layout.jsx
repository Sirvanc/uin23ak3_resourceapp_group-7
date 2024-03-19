import React, { useState } from "react";
import Section from "./Section";
import Nav from "./Nav";

export default function Layout({ children }) {
  const [activeTag, setActiveTag] = useState("html");

  return (
    <>
      <Nav activeTag={activeTag} setActiveTag={setActiveTag} />
      <Section activeTab={activeTag}>{children}</Section>
    </>
  );
}
