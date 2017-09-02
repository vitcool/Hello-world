import React, { Component } from 'react';
import './App.css';

import Header from './Header.js';

const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/posts',
    label: 'Posts'
  }
];

class App extends Component {
  render(){
    return(
      <Header items={menu}/>
    )
  }
}

export default App;
