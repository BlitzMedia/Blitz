import React, { Component } from 'react'
import './App.css'

// Other components
import { Heading } from './utils/type'

// Our Blitz! App
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Heading>Here are Shevy and Emotion</Heading>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App;
