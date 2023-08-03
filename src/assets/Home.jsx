export default function Home(){



    return(
    <div className="Asset-content home-main-div flex flex-col  items-center md:block min-h-full p-4  relative">
         <div className="border-black py-6 text-center md:text-left w-full max-w-xs md:max-w-xl">
          <h1 className="text-5xl text-black font-semibold">CALEB SIM</h1>
          <p className="text-2xl pt-2 font-medium">Front End Developer</p>
        </div>
        <div className="md:absolute  md:text-2xl w-44 md:right-14 md:bottom-1">
            <p className="font-medium text-center md:text-left">A junior front end developer. I strive to make the best out of my abilities. Creating websites and web assets with <span className="font-semibold text-3xl">JS, CSS, SCSS, REACT, & TAILWIND</span></p>
        </div>
    </div>
    )
}