import PropTypes from "prop-types";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => (
        <li className={css.listItem} key={id}>
          {`${name}: ${number}`}
          <button
            className={css.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.object,
  onDeleteContact: PropTypes.func,
};