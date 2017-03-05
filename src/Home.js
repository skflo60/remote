import React, { Component } from 'react';

import Logo from './components/core/Logo/Logo';
import FBButton from './components/core/FBButton/FBButton';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      	<Logo />
      	<div className="Home-message">
      		Une pêche d'enfer dès le matin
      	</div>
        <FBButton />
      </div>
    );
  }
}

export default Home;
