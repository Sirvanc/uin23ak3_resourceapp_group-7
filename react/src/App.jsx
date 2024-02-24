import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/Main';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/HTML" element={<Main category="html" />} />
          <Route path="/css" element={<Main category="css" />} />
          <Route path="/javascript" element={<Main category="javascript" />} />
          <Route path="/react" element={<Main category="react" />} />
          <Route path="/sanity" element={<Main category="sanity" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
