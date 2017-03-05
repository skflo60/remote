import React, { Component } from 'react';
import "./ActionBar.css";

class ActionBar extends Component {
  goToLink = (link) => {
      window.location.href = link;
  }

  render() {
    const items = this.props.items || [];
    const listItems = items.map(item => {
      return (
        <span key={item.key}>
          <i className={item.class} aria-hidden="true" onClick={() => {this.goToLink(item.link)}}></i>
        </span>
      );
    });
    return (
      <div className="ActionBar">
         {listItems}
      </div>
    );
  }
}

export default ActionBar;
