import React, { Component } from 'react'
import './App.css'

// Other components
import { Heading } from './utils/type'

// Our Blitz! App
class App extends Component {
  render() {
    return (
      <div className="⚡️">
        <Heading>This is Blitz!</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id in magnam eum voluptate, placeat, adipisci dolore. Praesentium dicta officia, voluptatum aut quibusdam velit. Molestias, a exercitationem fugiat commodi fuga eos.
        </p>
        <Heading>This is Blitz! 2</Heading>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut hic, corporis voluptatibus pariatur eum aliquam consequatur molestias omnis, vel quasi voluptatem perferendis iusto expedita. Ab cum quis tempore porro ipsum.</p>
      </div>
    )
  }
}

export default App;
