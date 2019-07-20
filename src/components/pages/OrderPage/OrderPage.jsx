import React, { Component } from 'react';
import { Button, Table, PageHeader } from 'react-bootstrap';

class OrderPage extends Component {

  constructor() {
    super();
    this.renderRows = this.renderRows.bind(this);
  }

  componentDidMount() {
    const { actions: { orderList } } = this.props;
    orderList();
  }

  renderRows() {
    const { orders } = this.props;
    return orders && orders.map((order) => (
      <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.orderNumber}</td>
        <td>{order.created_at}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <PageHeader>
          List Orders
        </PageHeader>
        <Table striped bordered condensed hover>
        <thead>
        <tr>
            <th>Id</th>
            <th>Order No.</th>
            <th>Created At</th>
        </tr>
        </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default OrderPage;