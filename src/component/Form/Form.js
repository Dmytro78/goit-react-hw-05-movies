import React, { Component } from "react";
import css from "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

 handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
 };
  
  submit = (e) => {
    e.preventDefault();
    this.reset();
    this.props.onSubmit(this.state);
  }

  reset = () => {
    this.setState({ name: "", number: "" });
  };

 

  render() {
    return (
      <form onSubmit={this.submit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            className={css.input}
            value={this.state.name}
            onChange={this.handleInputChange}
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
            value={this.state.number}
            onChange={this.handleInputChange}
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
}
export default Form;
