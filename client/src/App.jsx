import React, { useState } from "react"
import Navbar from "./components/Navbar"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import cdDetails from "./pages/CdDetails"
import Cds from "./pages/Cds"
import MyBookings from "./pages/MyBookings"

const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return(
    <>
        {!isOwnerPath &&  <Navbar setShowLogin={setShowLogin}/>}

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cds-details/:id" element={<cdDetails/>}/>
          <Route path="/my-bookings" element={<MyBookings/>}/>
        </Routes>
    </>
  )
}

export default App