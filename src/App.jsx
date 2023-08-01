import Home from "./assets/Home"

function App() {

  return (
    <div className="App flex flex-col md:flex-row justify-items-center">

       <nav className="main-nav font-semibold mx-4  md:mx-0 md:min-h-screen md:max-w-min md:py-8 md:pt-24 relative md:ml-6 ">
        <div className="nav-line main-nav-border-line transition-transform"></div>
          <div className="nav-list flex gap-4 py-4 md:py-0 md:gap-0 md:flex-col items-center relative">
            <div className="nav-item max-w-max md:mb-10 md:-rotate-90 transition-transform hover:scale-110">
              <a href="#">Home</a>
            </div>
            <div className="nav-item max-w-max md:mb-12 md:-rotate-90 transition-transform hover:scale-110">
              <a href="#">About</a>
            </div>
            <div className="nav-item max-w-max md:mb-12 md:-rotate-90 transition-transform hover:scale-110">
              <a href="#">Projects</a>
            </div>
            <div className="nav-item max-w-max md:mt-2 md:-rotate-90 transition-transform hover:scale-110">
              <a href="#">Contacts</a>
            </div>
            <div className="nav-item max-w-max md:mt-10 md:-rotate-90 transition-transform hover:scale-110">
              <a href="#">CVC</a>
            </div>
            <div className="nav-line line-inside-nav transition-transform"></div>
          </div>
          <div className="nav-line main-nav-border-line transition-transform"></div>

        </nav>

      <div className="main-wrap  border-black  md:border-r md:p-0 md:p-4 md:my-6 md:mx-4 overflow-y-scroll">
        <Home/>
      </div>
   
    </div>
  )
}

export default App
