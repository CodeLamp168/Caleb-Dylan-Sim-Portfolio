import jsImage from "/svgs/javascript.svg"
import cssImage from "/svgs/css3.svg"
import sassImage from "/svgs/sass.svg"
import tailwindImage from "/svgs/tailwindcss.svg"
import htmlImage from "/svgs/html5.svg"


export default function Home() {
  const ImageDisplay = ({ imgSrc, imgName }) => {
    return (
      <div className="w-14 flex flex-col items-center ">
        <img
          src={imgSrc}
          alt="image"
          className="language-logo w-8 h-8 "
        />
        <small className="mt-2">{imgName}</small>
      </div>
    );
  };

  function HomeHeader() {
    return (
      <div className="home-title-header border-black py-4 text-left w-full max-w-xs md:max-w-xl pl-4 ">
        <h1 className="text-7xl md:text-8xl  font-semibold tracking-wider">
          CALEB SIM
        </h1>
        <p className="text-3xl pt-2 font-medium tracking-wider">
          Junior Front End Developer
        </p>
        <ul className="language-display flex  w-full flex-wrap mt-6 md:gap-2 ">
          <ImageDisplay imgSrc={htmlImage} imgName={'HTML'} />
          <ImageDisplay imgSrc={cssImage}  imgName={'CSS'} />
          <ImageDisplay imgSrc={jsImage}  imgName={'Javascript'} />
          <ImageDisplay imgSrc={sassImage}  imgName={'SCSS'} />
          <ImageDisplay imgSrc={tailwindImage} imgName={'Tailwind'} />
         
        </ul>
      </div>
    );
  }

  function HomeDetails() {
    return (
      <div className="home-text-area p-4 sm:pl-4 text-2xl sm:w-auto md:w-7/12  lg:w-8/12">
        <p className="home-detail-text font-medium text-left  leading-relaxed  ">
          21 Year Old, Front End Developer based in the Philippines.<br /> Need a website developed or fixed? I can help you. 
        </p>
  

      </div>
    );
  }

  return (
    <div className="Asset-content min-h-screen home-main-div flex flex-col items-start mt-4 sm:mt-0 border-1 border-black  md:block  relative gap-4 md:gap-0 overflow-x-hidden">
      <HomeHeader />
      <HomeDetails />

    </div>
  );
}
