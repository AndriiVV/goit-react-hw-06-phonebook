import styles from "./ContactList.module.css"
import { useSelector } from "react-redux";

import { itemDelete } from "../../redux/phonebookActions";
import { useDispatch } from "react-redux";

const ContactList = () => {

  const contacts = useSelector((state) => state.phonebook.items);
  const seek = useSelector((state) => state.phonebook.filter);

  // console.log("ContactsList() is running...", contacts);

  const dispatch = useDispatch();
  
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts
        .filter((c) => {
          return c.name.toLowerCase().indexOf(seek.toLowerCase()) > -1
        })
        .map(contact => (
          <li className={styles.item} key={contact.id}><span>{contact.name}: {contact.number}</span>
            <button className={styles.btn} type="button" onClick={() => dispatch(itemDelete(contact.id))}>Delete</button>
          </li>
      ))}
    </ul>
  )
}

export default ContactList;