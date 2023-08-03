export default function Projects(){

    function ProjectHeader(){

        return(
        <div className="title-header py-6 text-center md:text-left w-full max-w-xs md:max-w-xl">
          <h1 className="text-5xl text-black font-semibold">Projects</h1>
        </div>
        )
    }

    function ProjectLists(){
       

        return(
            <div className="max-w-max md:absolute md:right-8 md:top-72">
                <ul className="text-right flex flex-col items-center lg:items-end gap-8">
                    <div className="flex flex-col lg:flex-row items-center lg:items-baseline w-72 lg:w-auto">
                        <ul className=" flex gap-2 px-2 font-semibold">
                            <p>HTML,</p>
                            <p>SCSS,</p>
                            <p>JS:</p>
                        </ul>
                        <li className=" px-2 text-left lg:text-right text-5xl font-semibold">
                            <a  href="#">Barotrauma Faction Card</a>
                        </li>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center lg:items-baseline w-72 lg:w-auto ">
                        <ul className=" flex gap-2 px-2 font-semibold">
                            <p>REACT,</p>
                            <p>TAILWIND:</p>
                        </ul>
                        <li className=" px-2 text-left lg:text-right text-5xl font-semibold">
                            <a  href="#">LOOP Studios Landing Page</a>
                        </li>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center lg:items-baseline w-72 lg:w-auto ">
                        <ul className=" flex gap-2 px-2 font-semibold">
                            <p>HTML,</p>
                            <p>SCSS,</p>
                            <p>JS:</p>
                        </ul>
                        <li className="px-2 text-left lg:text-right text-5xl font-semibold">
                            <a  href="#">Netflix Catalogue</a>
                        </li>
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