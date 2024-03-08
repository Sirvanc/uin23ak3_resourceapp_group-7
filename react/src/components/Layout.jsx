import React, { useState } from "react";
import Nav from "./Nav";
import Main from "./Main";


/**
 * @fileOverview Main component of the layout.
 * @author <NAME>
 */

import React, { useState } from "react";

/**
 * Main component of the layout.
 *
 * @param {object} props - properties of the component
 * @param {array} props.categories - list of categories
 * @param {function} props.onSelect - function to handle category selection
 */
const Layout = (props) => {
  const { categories, onSelect } = props;
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  /**
   * Handle category selection.
   *
   * @param {string} category - selected category
   */
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelect(category);
  };

  return (
    <div>
      <Nav categories={categories} onSelect={handleCategorySelect} />
      <Main category={selectedCategory} />
    </div>
  );
};

export default Layout;
/**Layout-komponenten binder sammen Nav og Main-komponentene og sørger for at 
 * de kommuniserer ved å sende kategorivalg fra Nav til Main og 
 * oppdatere visningen basert på den valgte kategorien. 
 * Ved hjelp av useState-hook'en, blir det definert en tilstand selectedCategory og en 
 * tilhørende funksjon setSelectedCategory. Den initielle verdien for selectedCategory 
 * settes til den første kategorien i categories-listen.handleCategorySelect-funksjonen blir definert 
 * for å oppdatere selectedCategory-tilstanden basert på den valgte kategorien. Denne funksjonen kalles når 
 * en kategori blir valgt i navigasjonsmenyen.*/