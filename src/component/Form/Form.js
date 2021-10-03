import { useState } from "react";
import css from "./Form.module.css";

export default function Form ({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

 const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    
   switch (name) {
     case "name":
       setName(value);
       break;
     case "number":
       setNumber(value);
       break;
     
     default:
       return;
   }
 };
  
const handleSubmit = (e) => {
  e.preventDefault();
  onSubmit(name, number);
   reset();
};

  const reset = () => {
    setName("");
    setNumber("");
  };

    return (
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            className={css.input}
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={css.label}>
          Phone
          <input
            type="tel"
            name="number"
            className={css.input}
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className={css.button}>
          Submit
        </button>
      </form>
    );
}