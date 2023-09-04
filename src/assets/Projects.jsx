export default function Projects(){

    function ProjectHeader(){

        return(
        <div className="title-header py-6 text-center md:text-left w-full max-w-xs md:max-w-xl">
          <h1 className="text-7xl lg:text-8xl text-black font-semibold">Projects</h1>
        </div>
        )
    }

    function ProjectLists(){



        function ProjectItem({Tools, ProjectName, weblink = null}){


            //fix responsive error
            return(
                <div className="project-list-item-wrap flex flex-col lg:flex-row items-center  md:items-end w-72 md:w-auto border-b border-black">
                            <ul className=" flex gap-2 px-2 font-semibold">
                                {Tools}    
                            </ul>
                            <li className="project-name px-2 text-center md:text-right text-5xl lg:text-6xl font-semibold cursor-pointer transition-transform duration-700 hover:scale-110 md:hover:scale-y-110 lg:hover:scale-105 relative">
                                <a  className="relative" href={weblink}>{ProjectName}</a>
                            </li>
                </div>
            )
        }


        const VanillaHTML = () => {
            return <><p className="">HTML</p> <p className=" " >CSS:</p></>;
          };
        
        const ReactTailwind = () => {
            return <><p className=" ">REACT </p> <p className=" ">Tailwind:</p></>;
        };

        const ReactSCSS = () => {
            return <><p className=" ">REACT </p> <p className=" ">SCSS:</p></>;
        };

        const VanillaSCSSJS = () => {
            return <><p className=" ">HTML</p> <p className="  ">SCSS</p> <p className=" ">JS:</p></>
        };

        const VanillaJS = () => {
            return <><p className=" ">HTML</p> <p className="  ">CSS</p> <p className=" ">JS:</p></>;
        };
       
        return(
            <div className="project-list-wrap max-w-max md:absolute md:right-0 h-4/5 relative overflow-y-scroll lg:pr-4">
                <ul className="text-right flex flex-col gap-6">
                    <div className="flex flex-col items-center md:items-end front-end-mentor-challenge-list ">
                        <h1 className="project-subject text-2xl font-bold mb-8">Frontend Mentor Challenges:</h1>
                        
                        <div className="flex flex-col items-end gap-12 md:gap-4">

                            <ProjectItem Tools={<ReactTailwind/>} ProjectName={`LOOP Studios Landing Page`} weblink={`https://codelamp168.github.io/Loop-Studios-Landing-Page-Tailwind-React/`}/>
                            <ProjectItem Tools={<ReactSCSS/>} ProjectName={`Space Program Tourism Site`} weblink={`https://codelamp168.github.io/Space-Tourism-Site/`}/>
                            <ProjectItem Tools={<VanillaJS/>} ProjectName={`News Homepage`} weblink={`https://codelamp168.github.io/News-Homepage-Front-End-Mentor-CHALLENGE/#`}/>
                            <ProjectItem Tools={<VanillaSCSSJS/>} ProjectName={`Interactive Card Details`}/>      
                            <ProjectItem Tools={<VanillaHTML/>} ProjectName={`Crowd Funding Page`}weblink={`https://codelamp168.github.io/FED-Challenge-SCSS-and-JS-Crowdfunding-Page/`}/>
                        </div>

                    </div>

                    <div className="flex flex-col items-center md:items-end front-end-mentor-challenge-list">
                        <h1 className="project-subject text-2xl font-bold my-4">My Own Projects:</h1>
                        <div className="flex flex-col items-end gap-4 ">
                            <ProjectItem Tools={<VanillaJS/>} ProjectName={`Barotrauma Faction Card`} weblink={`https://codelamp168.github.io/BaroTrauma-Faction-Card/`}/>
                            <ProjectItem Tools={<VanillaJS/>} ProjectName={`Pokedex API`}/>
                        </div>

                        <div className="invisible-div-for-fade-effect w-full h-2 md:h-4 mt-24"></div>


                    </div>
                 
                </ul>
            </div>
        )
    }


    return(
    <div className="Asset-content home-main-div flex flex-col  items-center md:block min-h-full p-4  relative ">
        <ProjectHeader/>
        <ProjectLists />
    </div>
    )
}