import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import NavbarComponent from './components/Navbar';
import About from './screens/About';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';



const App = () => {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
