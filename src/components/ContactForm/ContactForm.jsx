import styles from "./ContactForm.module.css"

import { useState } from "react";

import { itemAdd } from "../../redux/phonebookActions";
import { useDispatch, useSelector } from "react-redux";

const ContactForm = () => {

  const [state, setState] = useState({name: "", number: ""});

  const dispatch = useDispatch();
  
  const contacts = useSelector((state) => state.phonebook.items);

  const getInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  
  const handleSubmit = (e) => {
    // console.log("Add contact pressed...", state);
    e.preventDefault();

    if (contacts.find((item) => item.name === state.name)) {
		  alert(`${state.name} is already in contacts!`);
		  return;
	  }

    dispatch(itemAdd(state));
    setState({name: "", number: ""});
  }
  
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span className={styles.title}>Name</span>
        <input type="text"
          name="name"
          onChange={getInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={state.name}
          required/>
      </label>

      <label className={styles.field}>
        <span className={styles.title}>Number</span>
        <input type="tel"
          name="number"
          onChange={getInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={state.number}
          required/>
      </label>

      <button className={styles.button} type="submit">Add contact</button>
    </form>
  )
  
}

export default ContactForm;