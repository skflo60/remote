import React, { Component } from 'react';
import defaultPic from '../../../../public/defaultPic.jpg';

class ProfilePic extends Component {
  render() {
    return (
    <div className="ProfilePic">
      	<img src={defaultPic} alt="defaultPic"></img>
    </div>
    );
  }
}

export default ProfilePic;
