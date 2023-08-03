export default function Projects(){

    function ProjectHeader(){

        return(
        <div className="title-header py-6 text-center md:text-left w-full max-w-xs md:max-w-xl">
          <h1 className="text-5xl text-black font-semibold">Projects</h1>
        </div>
        )
    }

    function ProjectLists(){



        function ProjectItem({Tools, ProjectName, weblink = null}){


            //fix responsive error
            return(
                <div className="flex flex-col lg:flex-row items-center  md:items-end w-72 md:w-auto">
                            <ul className=" flex gap-2 px-2 font-semibold">
                                {Tools}    
                            </ul>
                            <li className=" px-2 text-left md:text-right text-5xl font-semibold cursor-pointer transition-transform">
                                <a  href={weblink}>{ProjectName}</a>
                            </li>
                </div>
            )
        }


        const VanillaHTML = () => {
            return <><p>HTML,</p> <p>CSS:</p></>;
          };
        
        const ReactTailwind = () => {
            return <><p>REACT, </p> <p>Tailwind:</p></>;
        };
        const VanillaSCSSJS = () => {
            return <><p>HTML,</p> <p>SCSS,</p> <p>JS:</p></>
        };

        const VanillaJS = () => {
            return <><p>HTML,</p> <p>CSS,</p> <p>JS:</p></>;
        };
       
        return(
            <div className="project-list-wrap max-w-max md:absolute md:right-0">
                <ul className="text-right flex flex-col gap-6 ">
                    <div className="flex flex-col items-center md:items-end front-end-mentor-challenge-list ">
                        <h1 className="project-subject text-2xl font-bold mb-4">Frontend Mentor Challenges:</h1>
                        
                        <div className="flex flex-col items-end gap-4">
                            <ProjectItem Tools={<ReactTailwind/>} ProjectName={`LOOP Studios Landing Page`}/>
                            <ProjectItem Tools={<VanillaHTML/>} ProjectName={`Testimonial Grid`}/>
                            <ProjectItem Tools={<VanillaJS/>} ProjectName={`News Homepage`}/>
                            <ProjectItem Tools={<VanillaSCSSJS/>} ProjectName={`Space Program Tourism Site`}/>
                            <ProjectItem Tools={<VanillaSCSSJS/>} ProjectName={`Interactive Card Details`}/>      
                            <ProjectItem Tools={<VanillaHTML/>} ProjectName={`Testimonial Grid`}/>
                        </div>

                    </div>

                    <div className="flex flex-col items-center md:items-end front-end-mentor-challenge-list">
                        <h1 className="project-subject text-2xl font-bold my-4">My Own Projects:</h1>
                        <div className="flex flex-col items-end gap-4">
                            <ProjectItem Tools={<VanillaJS/>} ProjectName={`Barotrauma Faction Card`}/>
                            <ProjectItem Tools={<VanillaJS/>} ProjectName={`Pokedex API`}/>
                            <ProjectItem Tools={<VanillaJS/>} ProjectName={`Barotrauma Faction Card`}/>
                            <ProjectItem Tools={<VanillaJS/>} ProjectName={`Pokedex API`}/>
                            <ProjectItem Tools={<VanillaJS/>} ProjectName={`Barotrauma Faction Card`}/>
                        
                        </div>


                    </div>
                 
                </ul>
            </div>
        )
    }


    return(
    <div className="Asset-content home-main-div flex flex-col  items-center md:block min-h-full p-4  relative">
        <ProjectHeader/>
        <ProjectLists />
    </div>
    )
}