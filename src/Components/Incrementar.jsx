/* eslint-disable react/display-name */
import React from "react"
export const Incrementar = React.memo(({ incrementar }) => {

  console.log('me esoy redibujando')
  return (
    <button onClick={ () => incrementar(220)}>Aumentar</button>
  )
})