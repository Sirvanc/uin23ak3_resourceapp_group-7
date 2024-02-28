import React, { useState } from "react";
import Nav from "./Nav";
import Main from "./Main";

export default function Layout() {
  const categories = ["html", "css", "javascript", "react", "headless-cms"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategorySelect = category => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Nav categories={categories} onSelect={handleCategorySelect} />
      <Main category={selectedCategory} />
    </div>
  );
}
