import React from 'react'
import { useState } from "react"

export const Reservation = () => {
  const [inputs, setInputs] = useState({
    isGoing: true,
    numberOfGuests: 2
  });

  const handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value

    setInputs((prevState) => ({
      ...prevState,
      [target.name]: value
    }))
  }

  return (
    <form>
      <label>
        Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={inputs.isGoing}
          onChange={handleChange} />
      </label>
      <br />
      <label>
        Number of guests:
        <input
          name="numberOfGuests"
          type="number"
          value={inputs.numberOfGuests}
          onChange={handleChange} />
      </label>
    </form>
  );
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const options = [
      { value: 'grapefruit', content: 'Grapefruit' },
      { value: 'lime', content: 'Lime' },
      { value: 'coconut', content: 'Coconut' },
      { value: 'mango', content: 'Mango' },
    ]

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            {options.map(({ value, content }) => (
              <option key={value} value={value}>
                {content}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
