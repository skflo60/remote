import React, { Component } from 'react';
import "./MultiSelectBox.css";

class MultiSelectBox extends Component {

  toggleSelection(item) {
    item.active = !item.active;
    console.log(this.props.values);
  }

  componentWillReceiveProps(nextProps) {
    console.log("test");
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.values !== this.props.values) {
      this.setState({ values: nextProps.values });
    }
  }

  render() {
    const values = this.props.values || [];
    const listItems = values.map(item => {
      return (
        <div key={item.key} className={item.active ? 'active' : ''} onClick={() => this.toggleSelection(item)}>
          {item.label}
        </div>
      );
    });
    return (
      <div className="MultiSelectBox">
         {listItems}
      </div>
    );
  }
}

export default MultiSelectBox;
