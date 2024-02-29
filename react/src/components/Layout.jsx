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
/**Layout-komponenten binder sammen Nav og Main-komponentene og sørger for at 
 * de kommuniserer ved å sende kategorivalg fra Nav til Main og 
 * oppdatere visningen basert på den valgte kategorien. 
 * Ved hjelp av useState-hook'en, blir det definert en tilstand selectedCategory og en 
 * tilhørende funksjon setSelectedCategory. Den initielle verdien for selectedCategory 
 * settes til den første kategorien i categories-listen.handleCategorySelect-funksjonen blir definert 
 * for å oppdatere selectedCategory-tilstanden basert på den valgte kategorien. Denne funksjonen kalles når 
 * en kategori blir valgt i navigasjonsmenyen.*/
