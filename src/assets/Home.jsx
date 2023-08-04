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
      <div className="title-header home-title-header border-black py-6 text-left w-full max-w-xs md:max-w-xl">
        <h1 className="text-7xl md:text-8xl  font-semibold tracking-wider">
          CALEB SIM
        </h1>
        <p className="text-3xl pt-2 font-medium tracking-wider">
          Junior Front End Developer
        </p>
        <ul className="language-display flex  w-full flex-wrap mt-6 md:gap-2">
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
      <div className="home-text-area md:absolute  text-2xl  w-80 md:w-72 md:right-14 md:bottom-10">
        <p className="home-detail-text font-medium text-left text-3xl  leading-relaxed">
          Started independent studies on Front End Development in 2022. Striving
          to create good websites using a variety of tools
        </p>
      </div>
    );
  }

  return (
    <div className="Asset-content min-h-screen home-main-div flex flex-col  items-center md:block  p-4  relative gap-12 md:gap-0">
      <HomeHeader />
      <HomeDetails />
    </div>
  );
}
