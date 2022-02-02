import PropTypes from "prop-types";
import s from "./ContactsFilter.module.css";

function ContactsFilter({filter, onChange}) {
    return (
        <div className={s.filterContainer}>
            <label className={s.label}>
                Find contacts by name
                <input
                    className={s.input}
                    type="text"
                    name="filter"
                    value={filter}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={onChange}
                />
            </label>
        </div>
        
    )
}

ContactsFilter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default ContactsFilter;