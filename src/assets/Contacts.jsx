import PageHeader from "./small-components/PageHeader";
import Discord from "/svgs/discord.svg";
import Instagram from "/svgs/instagram.svg";
import LinkedIn from "/svgs/linkedin.svg";
import Github from "/svgs/github.svg";

function ContactList() {

    const ImageLink = ({ href = '#', imgSrc }) => {


        return (
          <a href={href}>
            <img
              src={imgSrc}
              alt="image"
              className="contact-logo w-8 h-8 transform scale-100 hover:scale-110 transition-transform duration-300"
            />
          </a>
        );
      };

  return (
    <div class="contact-list-wrap">
      <ul className="flex flex-row w-64 gap-8 contact-list-ul-container">
        <ImageLink href={'https://github.com/CodeLamp168'} imgSrc={Github} />
        <ImageLink href={'https://www.linkedin.com/in/calebsimdev/'} imgSrc={LinkedIn} />
      </ul>
    </div>
  );
}

export default function Contacts() {
  return (
    <div className="Asset-content min-h-full p-2">
      <PageHeader pageTitle={`Contacts`} />
      <ContactList />
    </div>
  );
}
