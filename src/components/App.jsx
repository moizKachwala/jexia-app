import React, { Component } from 'react';
import {OrderPage} from './pages/OrderPage';

class Root extends Component {
  render() {
    return (
      <div className="container">
        <OrderPage/>
      </div>
    );
  }
}

export default Root;
