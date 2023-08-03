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

  return (
    <div className="App flex flex-col md:flex-row justify-items-center relative md:mx-10 lg:mx-16 ">

      
       <nav className="main-nav  border-black border-b md:border-none font-semibold mx-4  md:mx-0 md:min-h-screen md:max-w-min md:py-8 md:pt-24 relative">
        <div className="nav-line main-nav-border-line hidden md:block "></div>
          <div className="nav-list flex md:space-y-16 gap-2 py-4 md:py-0 md:gap-0 md:flex-col items-center relative ">
            <div className="nav-item max-w-max  md:-rotate-90 transition-transform hover:scale-110">
              <a href="#">Home</a>
            </div>
            <div className="nav-item max-w-max  md:-rotate-90 transition-transform hover:scale-110">
              <a href="#">Projects</a>
            </div>
            <div className="nav-item max-w-max  md:-rotate-90 transition-transform hover:scale-110">
              <a href="#">Contacts</a>
            </div>
            <div className="nav-item max-w-max  md:-rotate-90 transition-transform hover:scale-110">
              <a href="#">CVC</a>
            </div>
            <div className="nav-line line-inside-nav transition-transform"></div>
          </div>
          <div className="nav-line main-nav-border-line transition-transform hidden md:block "></div>

        </nav>

      <div className="main-wrap  border-black  md:border-r md:p-0 md:p-4 md:my-6 md:mr-6 overflow-hidden">
        <Projects/>
      </div>


  
    </div>
  )
}

export default App
