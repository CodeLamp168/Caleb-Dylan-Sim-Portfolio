import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import DarkMode from "./assets/small-components/DarkMode";
import Home from "./assets/Home";
import Projects from "./assets/Projects";
import Contacts from "./assets/Contacts";
import { NavLinks as NavContent } from "./assets/small-components/ImageLink"





function App() {
  function NavArea() {

    function NavItem({ to, ComponentName, customClass = '' }) {
      return (
        <div className={`nav-item max-w-max transition-transform md:-rotate-90 cursor-pointer" ${customClass} `}>
          <Link to={to} className="tracking-wide">
            {ComponentName}
          </Link>
        </div>
      );
    }

    return (
      <nav className="main-app-nav  font-semibold md:h-screen md:relative  md:flex md:flex-col md:justify-between items-center">
        <div className="nav-list flex md:flex-col justify-center items-center md:justify-between gap-8  md:gap-20 py-4 md:py-20 md:border-r">
          <NavItem to="/Caleb-Dylan-Sim-Portfolio/" ComponentName="Home" />
          <NavItem to="/Caleb-Dylan-Sim-Portfolio/projects" ComponentName="Projects" />
          <NavItem to="/Caleb-Dylan-Sim-Portfolio/cv" ComponentName="CV" />
          <DarkMode />
        </div>
        <div className="nav-link-list w-full flex justify-center items-center md:flex-col gap-6  mb-4 ">
           <NavContent/>
        </div>
      </nav>
    );
  }

  return (
    <Router>
      <div className="App grid md:mx-2 overflow-hidden">
        <NavArea />
        <div className="main-content-display border-r  md:m-2 relative ">
          <Routes>
            <Route path="/Caleb-Dylan-Sim-Portfolio/" exact element={<Home />} component={Home} />
            <Route
              path="/Caleb-Dylan-Sim-Portfolio/projects"
              exact
              element={<Projects />}
              component={Projects}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
