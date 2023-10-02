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
        <div className={`nav-item max-w-max transition-transform md:-rotate-90 cursor-pointer scale-105 md:hover:scale-110" ${customClass} `}>
          <Link to={to} className="tracking-wide hover:font-bold">
            {ComponentName}
          </Link>
        </div>
      );
    }

    return (
      <nav className="main-app-nav  font-semibold md:h-screen relative  md:flex md:flex-col md:justify-between items-center">
        <div className="nav-list flex md:flex-col justify-center items-center md:justify-between gap-4 md:gap-20 py-4 md:py-20   md:border-r">
          <NavItem to="/" ComponentName="Home" />
          <NavItem to="/projects" ComponentName="Projects" />
          <NavItem to="/contacts" ComponentName="Contacts" />
          <NavItem to="/cv" ComponentName="CV" />
          <DarkMode />
        </div>
        <div className="hidden md:flex flex-col gap-6 absolute bottom-2">
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
            <Route path="/" exact element={<Home />} component={Home} />
            <Route
              path="/projects"
              exact
              element={<Projects />}
              component={Projects}
            />
            <Route
              path="/contacts"
              exact
              element={<Contacts />}
              component={Contacts}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
