import React, { Component } from 'react';
import {StudentPage} from './pages/StudentPage';

class Root extends Component {
  render() {
    return (
      <div className="container">
        <StudentPage/>
      </div>
    );
  }
}

export default Root;
