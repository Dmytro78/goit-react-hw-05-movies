import { useState, useEffect } from "react";

import ContactList from "./component/Contacts/ContactList";
import Form from "./component/Form/Form";
import Filter from "./component/Filter/Filter";

import { v4 as uuidv4 } from "uuid";
import css from "./App.css";


export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem("Contacts"));
    if (localState) {
      setContacts(localState);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ( name, number ) => {
    let duplicate = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicate) {
      alert(`${name} is already in contacts`);
    } else {
      let contact = {
        name,
        number,
        id: uuidv4(),
      };

      setContacts((prevState) => ([contact, ...prevState]));
    }
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };


  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (contactId) => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };

       return (
      <>
        <h1 className={css}>Phonebook</h1>
        <Form onSubmit={addContact} />
        <h2 className={css}>Contacts</h2>
        {contacts.length === 0 ? null :
          <Filter value={filter} onChange={changeFilter}
          />}
        {contacts.length === 0 ? <p> No contacts</p> :
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />}
      </>
  );
}
 