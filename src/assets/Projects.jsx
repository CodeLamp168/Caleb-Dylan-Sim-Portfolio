import React, { useState } from 'react';
import PageHeader from './small-components/PageHeader';

export default function Projects(){

    function ProjectLists(){

         const VanillaHTML = () => {
            return <><p className=" ">HTML</p> <p className=" " >CSS:</p></>;
        };
        
        const ReactTailwind = () => {
            return <><p className=" ">REACT </p> <p className=" ">Tailwind:</p></>;
        };

        const ReactSCSS = () => {
            return <><p className=" ">REACT </p> <p className=" ">SCSS:</p></>;
        };
        const ReactCSS = () => {
            return <><p className=" ">REACT </p> <p className=" ">CSS:</p></>;
        };

        const VanillaSCSSJS = () => {
            return <><p className=" ">HTML</p> <p className="  ">SCSS</p> <p className=" ">JS:</p></>
        };

        const VanillaJS = () => {
            return <><p className=" ">HTML</p> <p className="  ">CSS</p> <p className=" ">JS:</p></>;
        };

        const SvelteJS = () => {
          return <><p className=" ">SVELTE</p> <p className="  ">CSS</p> <p className=" ">JS:</p></>;
      };

        function ProjectItem({Tools, ProjectName, weblink = null}){

            return(
                <div className="project-list-item-wrap flex flex-col lg:flex-row items-start  md:items-start lg:items-end min-w-full md:w-auto border-1 border-black border-b ">
                            <ul className=" flex gap-2 px-2 font-semibold">
                                {Tools}    
                            </ul>
                            <li className="project-name px-2 text-left text-5xl lg:text-6xl font-semibold cursor-pointer transition-transform duration-700 hover:scale-110 md:hover:scale-y-110 lg:hover:scale-105 relative">
                                <a  className="relative" href={weblink}>{ProjectName}</a>
                            </li>
                </div>
            )
        }
        function FrontEndMentor() {
            return (
              <div className="flex flex-col items-start md:items-end front-end-mentor-challenge-list ">
  
                <div className="flex flex-col items-start gap-12 md:gap-12">
                  <ProjectItem Tools={<VanillaJS />} ProjectName={`Watch Catalogue`} weblink={`https://codelamp168.github.io/Watch-Catalogue-Webpage/`} />
                  <ProjectItem Tools={<ReactSCSS />} ProjectName={`Space Program Tourism`} weblink={`https://codelamp168.github.io/Space-Tourism-Site/`} />
                  <ProjectItem Tools={<ReactTailwind />} ProjectName={`LOOP Studios`} weblink={`https://codelamp168.github.io/Loop-Studios-Landing-Page-Tailwind-React/`} />
                  <ProjectItem Tools={<SvelteJS/>} ProjectName={`TRAVEL`} weblink={`https://codelamp168.github.io/travelsite/`} />
                  <ProjectItem Tools={<VanillaJS />} ProjectName={`NEWS Flexbox`} weblink={`https://codelamp168.github.io/News-Homepage-Front-End-Mentor-CHALLENGE/`} />
                  <ProjectItem Tools={<VanillaJS />} ProjectName={`Verve Elegance`} weblink={`https://codelamp168.github.io/Verve-Elegence-Promo-Page/`} />
            
              
                </div>
                <div className="invisible-div-for-fade-effect w-full h-2 md:h-4 mt-24"></div>
              </div>
            );
          }
          
   
    


       
        return(
            <div className="project-list-wrap max-w-max md:absolute md:right-0 md:pt-16 h-4/5 relative overflow-y-scroll lg:pr-1 " >
                <ul className="text-right flex flex-col gap-6">
                <FrontEndMentor/>
                </ul>
            </div>
        )
    }


    return(
    <div className="Asset-content home-main-div flex flex-col  items-center md:block min-h-full p-0 sm:p-4  relative z-0 overflow-x-hidden">
        <PageHeader pageTitle={`PROJECTS`}/>
        <ProjectLists />
    </div>
    )
}