import { useState, useEffect } from "react";

export const Clock = () => {
  const [date, setDate] = useState(new Date(1995, 11, 17, 3, 24, 0));

  useEffect(() => {
    const timerID = setInterval(
      () => setDate(new Date()),
      1000
    )
    return () => clearInterval(timerID)
  }, [])

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  )
}
