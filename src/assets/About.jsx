import PageHeader from "./small-components/PageHeader"

export default function About(){

    function SkillList(){

        return( 
            <div className="skill-box p-2 border-r lg:border-l lg:border-0 border-black">
               <h2 className="text-7xl border-b border-black text-left md:w-auto ">SKILLS</h2>
               <div className="skill-list-wrapper  min-w-full">
                   <ul className="inline-flex items-start  flex-col gap-4 pl-4 pt-4">
                    <li className="skill-item">HTML</li>
                    <li className="skill-item">CSS</li>
                    <li className="skill-item">SCSS</li>
                    <li className="skill-item">JS</li>
                    <li className="skill-item">REACT</li>
                    <li className="skill-item">SVELTE</li>
                   </ul>
               </div>
            </div>
        )
    }

    function PracticalSkills(){

        return( 
            <div className="skill-box p-2 border-l lg:border-l lg:border-0 border-black lg:mt-10">
               <h2 className="text-7xl border-b border-black text-left md:w-auto ">Passive</h2>
               <div className="skill-list-wrapper  min-w-full">
                   <ul className="inline-flex items-start  flex-col gap-4 pl-4 pt-4">
                    <li className="skill-item">- NATIVE ENGLISH</li>
                    <li className="skill-item">- Beginner Filipino</li>
                   
                   </ul>
               </div>
            </div>
        )
    }

    function PassiveList(){

        return(
            <div className="passive-box"></div>
        )
    }


    function AboutSkills(){

        return(
            <div className="about-content-wrapper border-2 border-red-500 absolute flex flex-col sm:flex-row sm:bottom-0 justify-between lg:flex-col lg:block lg:w-80 xl:w-96 lg:absolute lg:h-full md:right-0 lgtop-0">
                <SkillList/>
                <PracticalSkills/>
            </div>

        )
    }

    return(
        <AboutSkills/>
    )
}

{/* <div className="Asset-content home-main-div flex flex-col  items-center md:block min-h-full p-4  relative z-0 ">
    <PageHeader pageTitle={`ABOUT`}/>
    </div> */}
