import React, { Component } from 'react';
import ActionBar from '../../components/common/ActionBar/ActionBar';

class ClockAdd extends Component {
  render() {
    const text = "Ajout d'un réveil"; 
    const menu = [
    { key: "back", class: "fa fa-arrow-left left", callback: () => { window.history.back } },
    { key: "validate", class: "right", text: "Valider", callback: {} }
    ];
    return (
      <div className="ClockAdd">
            <div className="title">
                <ActionBar items={menu} />
                {text}
            </div>
            <div className="content">
                <form>
                  <input type="time" name="time" />
                </form>
            </div>
      </div>
    );
  }
}

export default ClockAdd;
