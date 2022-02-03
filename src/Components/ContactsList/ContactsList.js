import PropTypes from "prop-types";
import ListItem from "../ListItem";
import s from "./ContactsList.module.css";

function ContactsList({ contactsBook, onClickDelete }) {
    return (
        <ul className={s.list}>
            {contactsBook.map(({ id, name, number }) => (
                <ListItem
                    key={id}
                    name={name}
                    number={number}
                    deleteContact={() => onClickDelete(id)}
                />
            ))}
            
        </ul>
    )   
}

ContactsList.propTypes = {
    contactsBook: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}

export default ContactsList;