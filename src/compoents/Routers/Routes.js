import React from 'react'
import { Route, Router } from 'react-router'
import Home from '../Home/Home'
import Register from '../RegisterPage/Register'

const Routes = () => {
  return (
    <div>
 <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* Other routes */}
      </Routes>
    </Router>

    </div>
  )
}

export default Routes