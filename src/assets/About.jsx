import PageHeader from "./small-components/PageHeader"

export default function About(){

    function SkillList(){

        return(
            <div className="skill-box">
               Hello World
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
            <div className="about-content-wrapper max-w-max md:absolute md:right-4 border border-red-500 ">
                <SkillList/>
            </div>
        )
    }

    return(
        <div className="Asset-content home-main-div flex flex-col  items-center md:block min-h-full p-4  relative z-0 ">
        <PageHeader pageTitle={`ABOUT`}/>
        <AboutSkills/>
       </div>
    )
}