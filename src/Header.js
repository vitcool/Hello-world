import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, key) => <a href="#" key={key}>{item.label}</a>)}
      </div>
    );
  }
}

export default Header;
