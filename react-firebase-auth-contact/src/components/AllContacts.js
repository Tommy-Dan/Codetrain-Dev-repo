import { useSelector } from "react-redux";
import Contact from "./Contact";




const AllContacts = ({ deleteUser, handleEdit }) =>{
  const { contacts } = useSelector((store) => store);

  return (
    <>
      <div className="container">
        <div className="row">
          {contacts?.map((contact, index) => {
            return (
              <Contact
                key={index}
                contactData={contact}
                deleteUser={deleteUser}
                handleEdit={handleEdit}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllContacts;
