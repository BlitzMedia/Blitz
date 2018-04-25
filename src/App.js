import React, { Component } from 'react'
import { Route, NavLink, withRouter, matchPath } from 'react-router-dom'
import TypeWriter from 'react-typewriter'
import logo from './things/Blitz.png'
import './App.css'

// Other components
import { Blitz, Heading, SubHeading, Nav, BlitzLink, fullyCentered, Column, bordered } from './utils/type'

const Home = () => (
  <TypeWriter typing={1} initDelay={0}>
    <Heading className={bordered}>Bienvenidos al viaje de Blitz!</Heading>
  </TypeWriter>
)
const Two = () => <Heading className={bordered}>Porque hacer las cosas de cero</Heading>
const Three = () => <Heading className={bordered}>es el puto rollo...</Heading>

// Our Blitz! App
class App extends Component {
  render() {
    return (
      <Blitz className={fullyCentered}>

        <Column>

          <figure>
            <img src={logo} alt="Logo" />
          </figure>

          <Route exact path='/' component={Home} />
          <Route path='/2'  component={Two} />
          <Route path='/3'  component={Three} />

          <Nav>
            <NavLink exact to='/'>
              <SubHeading>Uno!</SubHeading>
            </NavLink>
            <NavLink to='/2'>
              <SubHeading>Dos!</SubHeading>
            </NavLink>
            <NavLink to='/3'>
              <SubHeading>Tres!</SubHeading>
            </NavLink>
          </Nav>

          <p>Esta es la pinta que tiene una página, hecha de 0, en su primer día</p>
        </Column>
      </Blitz>
    )
  }
}

export default App;
