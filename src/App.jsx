import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import DarkMode from './assets/small-components/DarkMode';
import Home from "./assets/Home";
import Projects from "./assets/Projects";
import Contacts from './assets/Contacts';


function App() {
 function LoadingScreen(){
  return(
      <div className="page-loading fixed w-screen min-h-screen z-50">

        <div className="w-screen min-h-screen relative grid place-content-center">

          <div className="loading-text border-white border-r border-l rounded  text-center overflow-hidden py-4">
            <h1 className="uppercase text-white text-3xl w-max break-words px-4">Caleb Sim <span className="text-5xl">Portfolio</span></h1>
          </div>

        </div>

      </div>
     
    )
  }

  function NavArea(){

    function NavItem({ to, ComponentName }) {
      return (
        <div className="nav-item max-w-max transition-transform md:-rotate-90 cursor-pointer scale-105 md:hover:scale-110">
          <Link to={to} className="tracking-wide hover:font-bold">
            {ComponentName}
          </Link>
        </div>
      );
    }

    return(
      <nav className="main-app-nav  font-semibold md:min-h-screen relative">
          <div className="nav-list flex md:flex-col justify-center items-center md:justify-start gap-6 md:gap-24 py-4 md:py-20   md:border-r">
          <NavItem to="/" ComponentName="Home" />
          <NavItem to="/projects" ComponentName="Projects" />
          <NavItem to="/contacts" ComponentName="Contacts" />
          <NavItem to="/cv" ComponentName="CV" />
          <DarkMode/>
          </div>
      </nav>
    )
  }

  return (
    <Router>
    <div className="App grid md:mx-2">
      <NavArea/>
      <div className="main-content-display border-r   md:m-2 relative md:overflow-hidden">
        <Routes>
          <Route path='/' exact element={<Home/>} component={Home}/>
          <Route path='/projects' exact element={<Projects/>} component={Projects}/>
          <Route path='/contacts' exact element={<Contacts/>} component={Contacts}/>
        </Routes>
      </div>

    </div>
    </Router>
  )
}

export default App
