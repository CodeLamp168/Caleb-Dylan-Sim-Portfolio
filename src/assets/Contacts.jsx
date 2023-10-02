import PageHeader from "./small-components/PageHeader";
import { ContactLinks as ContactContent } from "./small-components/ImageLink";



function ContactList() {


  return (
    <div className="contact-list-wrap relative">
      <ul className="flex justify-between gap-8 w-64  contact-list-ul-container ml-6 md:ml-0 ">
        <ContactContent/>
      </ul>
    </div>
  );
}

export default function Contacts() {
  return (
    <div className="Asset-content min-h-screen p-2">
      <PageHeader pageTitle={`Contacts`} />
      <ContactList />
    </div>
  );
}
