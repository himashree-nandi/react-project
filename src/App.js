import React from 'react'
import DisplayUserData from './routing/DisplayUserData'
import UserDetail from './routing/UserDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './routing/Navbar';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<UserDetail />}  />
          <Route path='/display' element={<DisplayUserData />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App