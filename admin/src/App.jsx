import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin';

const App = () => {
  return (
    <div>
      <Navbar />
      <Admin />
    </div>
  )
}

export default App
