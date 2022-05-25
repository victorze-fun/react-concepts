import React from 'react'
import { useState } from "react"

export const App = () => {
  return <WelcomeDialog />
}

const WelcomeDialog = () => {
  return (
    <FancyBorder color="blue" foo={<div>foo foo foo</div>}>
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  )
}

const FancyBorder = ({ color, children, foo }) => {
  return (
    <div className={'FancyBorder FancyBorder-' + color}>
      {children}
      {foo}
    </div>
  )
}
