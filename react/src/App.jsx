import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Section from "./components/Section"; // Add missing import statement
import { resources } from "./assets/ressurser";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/html" element={<Section resources={resources} />} />
        <Route path="/css" element={<Section resources={resources} />} />
        <Route path="/javaScript" element={<Section resources={resources} />} />
        <Route path="/react" element={<Section resources={resources} />} />
        <Route
          path="/headless-CMS"
          element={<Section resources={resources} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
