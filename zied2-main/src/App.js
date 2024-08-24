import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginparent from './LoginParent/Loginparent'
import Loginteacher from './LoginTeacher/Loginteacher'
import WhoAreYou from './WhoAreYou/WhoAreYou'

import Body from './LandingPage/Body'


function App() {

  return (
    <>
      <Router>
        <div className="app-container">

          <div className="content-container">
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/WhoAreYou" element={<WhoAreYou />} />
              <Route path="/Loginteacher" element={<Loginteacher />} />
              <Route path="/Loginparent" element={<Loginparent />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
