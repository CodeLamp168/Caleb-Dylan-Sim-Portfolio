import Discord from "/svgs/discord.svg";
import Github from "/svgs/github.svg";
import Gmail from "/svgs/gmail.svg";;
import Instagram from "/svgs/instagram.svg";
import LinkedIn from "/svgs/linkedin.svg";




const ImageLink = ({ href = '#', imgSrc, linkWidth }) => {


    return (
      <a href={href} className="contact-item">
        <img
          src={imgSrc}
          alt="image"
          className={`contact-logo ${linkWidth}`}
        />
      </a>
    );
  };


  export const NavLinks = () => {

    let navWidth = 'w-6 h-6'


    return (
      <>
       <ImageLink href={"https://github.com/CodeLamp168"} imgSrc={Github} linkWidth={navWidth} />
       <ImageLink href={`https://www.linkedin.com/in/calebsimdev/`} imgSrc={LinkedIn} linkWidth={navWidth} />
       <ImageLink href={`https://mail.google.com/mail/?view=cm&source=mailto&to=dylansim168@gmail.com&body=This%20is%20mail%20body&su=Hello%20Caleb%20`} imgSrc={Gmail} linkWidth={navWidth} />
      </>
    )
  }

  export const ContactLinks = () => {

    let contactWidth = 'w-8 h-8'
    return(
     <>
      <ImageLink href={"https://github.com/CodeLamp168"} imgSrc={Github}  linkWidth={contactWidth}/>
      <ImageLink href={`https://www.linkedin.com/in/calebsimdev/`} imgSrc={LinkedIn} linkWidth={contactWidth} />
      <ImageLink href={`https://mail.google.com/mail/?view=cm&source=mailto&to=dylansim168@gmail.com&body=This%20is%20mail%20body&su=Hello%20Caleb%20`} imgSrc={Gmail} linkWidth={contactWidth} />
      <ImageLink imgSrc={Discord} linkWidth={contactWidth} />
     </>
    )
  }