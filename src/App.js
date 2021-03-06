import "/node_modules/modern-normalize/modern-normalize.css";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
	return (
		<div className="App">
			<h1 className="title">Phonebook</h1>
			<ContactForm />
			<h2 className="title">Contacts</h2>
			<Filter />
			<ContactList />
		</div>
	);
};

export default App;
