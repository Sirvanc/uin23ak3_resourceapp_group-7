import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Main from "./components/Main"



function App() {

  return (
    <Layout>
      <Routes>
        <Route path=":slug" element = "" />
        <Route path=""/>
      </Routes>
    </Layout>
  )
}

export default App

/*Sett opp Routing til sidene /html, /css, /javascript, /react og /sanity, 
hvor hver av disse router til componenten "Resouces", 
og sender med en prop til "Resources" med riktig ressurskategori ( eks: category={"html"} ). 
Bruk prop-en "category" og moderne javascript for å liste opp riktige ressurser fra ressurser.js.*/