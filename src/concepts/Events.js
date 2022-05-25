import { useState } from "react";

export const Toogle = () => {
  const [isToggleOn, setIsToggleOn] = useState(true)

  const handleClick = (e) => {
    console.log(e)
    setIsToggleOn((isToggleOn) => !isToggleOn)
  }

  return (
    <button onClick={handleClick}>
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  )
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
