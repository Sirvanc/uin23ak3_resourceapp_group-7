import React from "react";

export default function Main({ activeTag }) {
  return (
    <>
      <h1>Ressursarkiv </h1>
      {activeTag && <p>Active tag: {activeTag}</p>}
    </>
  );
}
