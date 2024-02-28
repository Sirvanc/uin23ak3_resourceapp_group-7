import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/Main';
import Nav from './components/Nav';
import "./scss/main.scss";



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/:category" element={<Main />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
