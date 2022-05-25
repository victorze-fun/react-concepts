import { useState } from "react"

export const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  let button
  if (isLoggedIn) {
    button = <LogoutButton onClick={() => setIsLoggedIn(false)} />
  } else {
    button = <LoginButton onClick={() => setIsLoggedIn(true)} />
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  )
}

const LoginButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Login
    </button>
  );
}

const LogoutButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Logout
    </button>
  );
}

const Greeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function UserGreeting() {
  return <h1>Welcome back!</h1>
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>
}
