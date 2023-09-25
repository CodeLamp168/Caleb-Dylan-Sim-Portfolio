export default function Home(){

    function HomeHeader(){

        return(
        <div className="title-header home-title-header border-black py-6 text-left w-full max-w-xs md:max-w-xl">
          <h1 className="text-7xl md:text-8xl  font-semibold tracking-wider">CALEB SIM</h1>
          <p className="text-4xl pt-2 font-medium tracking-wider">Front End Developer</p>
        </div>
        )
    }

    function HomeDetails(){
    
        return(
        <div className="home-text-area md:absolute  text-2xl  w-72 md:right-14 md:bottom-10 ">
        <p className="home-detail-text font-medium text-left text-3xl  leading-relaxed">Started independent studies on Front End Development in 2022. Striving to create good websites and web assets with <span className="text-black text-3xl font-bold">JS, CSS, SCSS, REACT, & TAILWIND</span>
        </p>
        </div>
        )
    }


    return(
    <div className="Asset-content min-h-screen home-main-div flex flex-col  items-center md:block  p-4  relative gap-12 md:gap-0">
        <HomeHeader/>
        <HomeDetails/>
    </div>
    )
}