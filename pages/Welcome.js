import React, { Component } from 'react';
import MiniLogo from '../components/core/Logo/MiniLogo';
import Cogs from '../components/common/Cogs/Cogs';
import ProfilePic from '../components/core/ProfilePic/ProfilePic';
import Shine from '../components/core/Shine/Shine';
import HelloFb from '../components/core/Hello/Hello';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
      		 <MiniLogo />
           <Cogs link="#/settings" />
           <ProfilePic />
           <HelloFb />
           <Shine/>
      </div>
    );
  }
}

export default Welcome;
