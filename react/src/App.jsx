import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { resources } from './assets/ressurser'
import Resources from './components/Resources';
import Layout from './components/Layout';
/** Her importerer vi nødvendige moduler og komponenter fra React, React Router, samt egendefinerte ressurser og komponenter. */
function App() { /**Definisjonen av hovedkomponenten App. */

  return ( /**Her returnerer vi hovedkomponenten Layout, som inneholder hele innholdet i applikasjonen.
   Inne i denne komponenten definerer vi ruter ved hjelp av <Routes>-elementet. */
   /** Dette er en rute for rotstien /. Når applikasjonen lastes, blir brukeren omdirigert til ruten /HTML ved hjelp av <Navigate>-komponenten. 
    * Dette definerer en rute for stien /HTML. Når denne ruten matches, vises komponenten Resources, 
    * og resources-objektet blir sendt som en prop sammen med kategorien "html".
   */
    <Layout>
      <Routes>
        
        <Route path='/' element={<Navigate to='/HTML' />} /> /**  */
        <Route path='/HTML' element={<Resources resources={resources} category={"html"} />} />
        <Route path='/CSS' element={<Resources resources={resources} category={"css"} />} />
        <Route path='/JavaScript' element={<Resources resources={resources} category={"JavaScript"} />} />
        <Route path='/React' element={<Resources resources={resources} category={"React"} />} />
        <Route path='/Sanity-and-headless-CMS' element={<Resources resources={resources} category={"Sanity and headless CMS"} />} />
        
      </Routes>
    </Layout>
  );
}

export default App;/**Til slutt eksporteres App-komponenten som standard eksport, slik at den kan importeres og brukes andre steder i applikasjonen. */
