import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { resources } from './assets/ressurser'
import Layout from './components/Layout';

function App() { 

  return ( 
    <Layout>
      <Routes>
        
        <Route path='/' element={<Navigate to='/HTML' />} />
        
      </Routes>
    </Layout>
  );
}

export default App;
