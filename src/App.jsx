// import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
          <Navbar />
      <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}

export default App
