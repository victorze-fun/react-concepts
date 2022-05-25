import React from 'react'
import { useState } from "react"

export const Calculator = () => {
  const [temperature, setTemperature] = useState('')
  const [scale, setScale] = useState('c')

  const handleCelsiusChange = (temperature) => {
    setScale(() => 'c')
    setTemperature(() => temperature)
  }

  const handleFahrenheitChange = (temperature) => {
    setScale(() => 'f')
    setTemperature(() => temperature)
  }

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

  return (
    <div>
      <TemperatureInput
        scale="c"
        value={celsius}
        onChange={handleCelsiusChange} />
      <TemperatureInput
        scale="f"
        value={fahrenheit}
        onChange={handleFahrenheitChange} />
      <BoilingVerdict
        celsius={parseFloat(celsius)} />
    </div>
  )
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

const TemperatureInput = ({ value, onChange, scale }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        value={value}
        onChange={handleChange}
      />
    </fieldset>
  )
}

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9
}

const toFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32
}

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

const BoilingVerdict = ({ celsius }) => {
  if (celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}
