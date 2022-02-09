import { Component } from "react";
import Section from "./Components/Section";
import ContactForm from "./Components/ContactForm";
import ContactsList from "./Components/ContactsList";
import ContactsFilter from "./Components/ContactsFilter";
import Notification from "./Components/Notification";


class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }  
  }

  componentDidMount() {
    this.setState({
      contacts: JSON.parse(localStorage.getItem("contacts")) ?? []
    })
  }

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const checkSameName =
      contacts.some(({ name, number }) =>
        name.toLowerCase() === data.name.toLowerCase() && number === data.number);
    
    const message = `${data.name} with this phone number - ${data.number} are already in contacts!`;

    this.setState((prevState) => ({
      contacts:
        checkSameName ?
          (alert(message), prevState.contacts) :
          [data, ...prevState.contacts]
    }))
  }

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value
    })
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilterText = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilterText))
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const { filter, contacts } = this.state;
    
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phone book">
          <ContactForm onSubmit={this.formSubmitHandler} />   
        </Section>

        <Section title="Contacts">
          
          {contacts.length === 0  ? 
            <Notification message="Contacts book is empty!" /> :
            <>
              <ContactsFilter
                value={filter}
                onChange={this.changeFilter}
              />
              <ContactsList
                contactsBook={visibleContacts}
                onClickDelete={this.deleteContact}
              /> 
            </>
            
          }
           
        </Section>
      </>  
    )
  }
  
}

export default App;
