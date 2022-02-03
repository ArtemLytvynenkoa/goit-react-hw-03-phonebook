import PropTypes from "prop-types";
import { string } from "prop-types";
import s from "./ListItem.module.css";

function ListItem({name, number, deleteContact }) {
    return (
        <li className={s.item} >
            <p>{name}</p>
            <a className={s.link} href={`tel:+${number.split('-').join('')}`}>{number}</a>
            <button
                className={s.button}
                type="button"
                onClick={deleteContact}
            >
                Delete
            </button>
        </li >
    )
}

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
}

export default ListItem;