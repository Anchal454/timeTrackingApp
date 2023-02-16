import React from 'react'
import Header from './common/Header'

const App = (props) => {
  return (
    <>
      <Header/>
      {props.children}
    </>
  )
}

export default App
