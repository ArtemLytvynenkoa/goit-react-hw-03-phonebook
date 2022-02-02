import PropTypes from "prop-types";
import s from "./ListItem.module.css";

function ListItem({name, number, deleteContact, id}) {
    return (
        <li className={s.item}>
            <p>{name}</p>
            <a className={s.link} href={`tel:+${number.split('-').join('')}`}>{number}</a>
            <button
                className={s.button}
                type="button"
                onClick={() => deleteContact(id)}
            >
                Delete
            </button>
        </li>
    )
}

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
}

export default ListItem;