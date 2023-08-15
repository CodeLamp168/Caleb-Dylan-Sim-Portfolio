import Home from "./assets/Home"
import Projects from "./assets/Projects"

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

    function NavItem({ComponentLink, ComponentName}){
      return(
        <div className="nav-item max-w-max  transition-transform md:-rotate-90 cursor-pointer scale-105 md:hover:scale-110">
              <a className="tracking-wide hover:font-bold" href={ComponentLink}>{ComponentName}</a>
        </div>
      )
    }

    return(
      <nav className="main-app-nav  font-semibold md:min-h-screen relative">
          <div className="nav-list flex md:flex-col justify-center items-center md:justify-start gap-6 md:gap-24 py-4 md:py-20  border-black   md:border-r">
             <NavItem ComponentName={`Home`} />
             <NavItem ComponentName={`Projects`} />
             <NavItem ComponentName={`Contacts`} />
             <NavItem ComponentName={`CVC`} />
          </div>
      </nav>
    )
  }

  return (
    <div className="App grid max-h-screen md:mx-2">
      <NavArea/>
      <div className="main-content-display border-r border-black  md:m-2 relative md:overflow-hidden">
        <Home/>
      </div>

    </div>
  )
}

export default App
