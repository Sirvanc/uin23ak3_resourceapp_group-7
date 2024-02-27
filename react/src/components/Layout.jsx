import React, { useState } from "react";
import Main from "./Main";
import Nav from "./Nav";

export default function Layout() {
  const [activeTag, setActiveTag] = useState("html");

  return (
    <>
      <Nav activeTag={activeTag} setActiveTag={setActiveTag} />
      <Main activeTab={activeTag} />
    </>
  );
}
