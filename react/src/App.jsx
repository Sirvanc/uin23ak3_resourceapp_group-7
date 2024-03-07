import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"



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