import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Section from "./components/Section"; // Add missing import statement
import { resources } from "./assets/ressurser";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/html"
          element={<Section resources={resources} category={"html"} />}
        />
        <Route
          path="/css"
          element={<Section resources={resources} category={"css"} />}
        />
        <Route
          path="/javaScript"
          element={<Section resources={resources} category={"JavaScript"} />}
        />
        <Route
          path="/react"
          element={<Section resources={resources} category={"React"} />}
        />
        <Route
          path="/sanity-and-headless-CMS"
          element={
            <Section
              resources={resources}
              category={"Sanity and headless CMS"}
            />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
