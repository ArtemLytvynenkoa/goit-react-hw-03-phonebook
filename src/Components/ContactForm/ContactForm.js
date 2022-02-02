import PropTypes from "prop-types";
import { Component } from "react";
import { nanoid } from 'nanoid'
import s from "./ContactForm.module.css";

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    
    handleSubmit = e => {
        e.preventDefault();
        const id = nanoid();
        
        this.props.onSubmit({id, ...this.state});
        this.reset();
    }

    handleInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value
        })
    }

    reset = () => {
        this.setState({name: '',number: ''})
    }

    render() {
        const { name, number } = this.state;
        return (
            <div className={s.formContainer}>
                <form className={s.form} onSubmit={this.handleSubmit}>
                    <label className={s.label}>
                        Name
                        <input
                            className={s.input}
                            type="text"
                            name="name"
                            value={name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={this.handleInputChange}
                        />
                    </label>

                    <label className={s.label}>
                        Number
                        <input
                            className={s.input}
                            type="tel"
                            name="number"
                            value={number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            onChange={this.handleInputChange}
                        />
                    </label>
                    
                    <button className={s.button} type="submit">Add contact</button>

                </form>

            </div>
        )}
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;