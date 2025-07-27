import { Nav } from "./components/nav"
import { Outlet } from "react-router-dom"
import { useState } from "react";
import { SearchProvider } from "./searchContex/searchContex";
import Footer from "./components/footer";
function App() {
  
  return (
    <>
    <SearchProvider>
    <Nav />
    <Outlet/>
    <Footer/>
    </SearchProvider>
    </>
  )
}

export default App
