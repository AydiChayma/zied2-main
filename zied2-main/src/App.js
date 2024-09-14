import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginparent from './LoginParent/Loginparent'
import Loginteacher from './LoginTeacher/Loginteacher'
import WhoAreYou from './WhoAreYou/WhoAreYou'
import Schedual from './Schedual/Schedual'
import Body from './LandingPage/Body'
import AccountsPage from './AddChild/AccountsPage';
import Signup from './Signup/Signup'
import Signupteacher from './SignupTeacher/Signupteacher';
import Cours from './cours/cours';
import Parametre from './Parametre/Parametre'
import Paiment from './Paiment/Paiment';
import Signupkid from './Signupkid/Signupkid.';
import Formulaire from './Paiment/Formulaire';
import DecouvrirClub from './DecouvrirClub/DecouvrirClub';
import Video from './DecouvrirClub/Video'
import AddRobot from './Robot/AddRobot'
import RobotList from './Robot/RobotList'
import Calendar from './EspaceEnfant/Calender';
import Calendar1 from './EspaceEnfant/quiz/Calender';
import Calendar2 from './EspaceEnfant/cour/Calender';

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
              <Route path="/Signupkid" element={<Signupkid />} />
              <Route path="/Schedual" element={<Schedual />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Signupteacher" element={<Signupteacher />} />
              <Route path="/Cours" element={<Cours />} />
              <Route path="/Parametre" element={<Parametre />} />
              <Route path="/Paiment" element={<Paiment />} />
              <Route path="/Formulaire" element={<Formulaire />} />
              <Route path="/DecouvrirClub" element={<DecouvrirClub />} />
              <Route path="/club/:id" element={<Video />} />
              <Route path="/Robot" element={<AddRobot />} />
              <Route path="/RobotList" element={<RobotList />} />
              <Route path="/CalenderChild" element={<Calendar />} />
              <Route path="/quiz" element={<Calendar1 />} />
              <Route path="/cour" element={<Calendar2 />} />


            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
