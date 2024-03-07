import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Main from "./Main";

export default function Layout() {
  const [activeTag, setActiveTag] = useState(null);

  return (
    <>
      <Nav activeTag={activeTag} setActiveTag={setActiveTag} />
      <Main activeTag={activeTag} />
    </>
  );
}
