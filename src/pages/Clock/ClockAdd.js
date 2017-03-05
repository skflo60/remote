import React, { Component } from 'react';
import ActionBar from '../../components/common/ActionBar/ActionBar';
import MultiSelectBox from '../../components/common/MultiSelectBox/MultiSelectBox';

class ClockAdd extends Component {

  checkValidity() {

  }

  render() {
    const now = new Date().toLocaleTimeString('fr-FR', { hour12: false, 
                                             hour: "numeric", 
                                             minute: "numeric"});
    const days = [{ key: 1, label: "Lun"}, { key: 2, label: "Mar"}, { key: 3, label: "Mer"},
     { key: 4, label: "Jeu"}, { key: 5, label: "Ven"}, { key: 6, label: "Sam"}, { key: 7, label: "Dim"}];
    const text = "Ajout d'un réveil"; 
    const menu = [
    { key: "back", class: "fa fa-arrow-left left", callback: () => { window.history.back() } },
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
                  <MultiSelectBox onChange={() => this.checkValidity()} values={days} />
                  <input type="time" name="time" onChange={() => this.checkValidity()} value={now} />
                </form>
            </div>
      </div>
    );
  }
}

export default ClockAdd;
