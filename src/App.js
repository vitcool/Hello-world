import React, { Component } from 'react';
import './App.css';

import RegistrationForms from './RegistrationForms.js';

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
      <RegistrationForms items={menu}/>
    )
  }
}

export default App;
