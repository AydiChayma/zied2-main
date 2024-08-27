import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginparent from './LoginParent/Loginparent'
import Loginteacher from './LoginTeacher/Loginteacher'
import WhoAreYou from './WhoAreYou/WhoAreYou'
import Schedual from './Schedual/Schedual'
import Body from './LandingPage/Body'
import AccountsPage from './AddChild/AccountsPage';
import Signup from './Signup/Signup'
import Signupkid from './Signupkid/Signupkid.';
import Signupteacher from './SignupTeacher/Signupteacher';

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
              <Route path="/AccountsPage" element={<AccountsPage />} />
              <Route path="/Schedual" element={<Schedual />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Signupkid" element={<Signupkid />} />
              <Route path="/Signupteacher" element={<Signupteacher />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
