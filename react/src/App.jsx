import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { resources } from './assets/ressurser'
import Resources from './components/Resources';
import Layout from './components/Layout';

function App() { 

  return ( 
    <Layout>
      <Routes>
        
        <Route path='/' element={<Navigate to='/HTML' />} /> 
        <Route path='/HTML' element={<Resources resources={resources} category={"html"} />} />
        <Route path='/CSS' element={<Resources resources={resources} category={"css"} />} />
        <Route path='/JavaScript' element={<Resources resources={resources} category={"JavaScript"} />} />
        <Route path='/React' element={<Resources resources={resources} category={"React"} />} />
        <Route path='/Sanity-and-headless-CMS' element={<Resources resources={resources} category={"Sanity and headless CMS"} />} />
        
      </Routes>
    </Layout>
  );
}

export default App;