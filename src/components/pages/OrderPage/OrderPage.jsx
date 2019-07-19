import React, {Component} from 'react';

class OrderPage extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        const { actions: { orderList } } = this.props;
        orderList();
    }

    render() {
        return (
            <div>List of Orders</div>
        );
    }
}

export default OrderPage;