import React, { Component } from 'react'
import logo from './things/Blitz.png'
import './App.css'

// Other components
import { Blitz, Heading, SubHeading, fullyCentered, Column, bordered } from './utils/type'

// Our Blitz! App
class App extends Component {
  render() {
    return (
      <Blitz className={fullyCentered}>
        <Column>
          <figure>
            <img src={logo} alt="Logo" />
          </figure>

          <Heading className={bordered}>La nueva página</Heading>
          <SubHeading>Bienvenidos a nuestro viaje!</SubHeading>
          <p>
            Esta es la pinta que tiene una página, hecha de 0, en su primer día
          </p>
        </Column>
      </Blitz>
    )
  }
}

export default App;
//
