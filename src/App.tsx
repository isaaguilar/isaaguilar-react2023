import React from "react"
import "./styles.css"
import IMAGE from "./images/sat.jpeg"

const s = `${process.env.name} ${process.env.NODE_ENV}`

export const App = () => {
  return (
    <>
      <h1>{s}</h1>
      <img src={IMAGE} alt="logo" />
    </>
  )
}
