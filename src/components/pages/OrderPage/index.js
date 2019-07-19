import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import OrderPageComponent from './OrderPage.jsx';
import {list, select} from '../../../store/actions/orders';
// import {selectOrders} from '../../../store/selectors/orders';

export const OrderPage = connect(
    (state) => ({
        orders: [],
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            orderList: list,
            orderSelect: select,
        }, dispatch)
    })
)(OrderPageComponent);