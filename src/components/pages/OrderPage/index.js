import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import OrderPageComponent from './OrderPage.jsx';
import {list} from '../../../store/actions/orders';
import {selectOrders} from '../../../store/selectors/orders';

export const OrderPage = connect(
    (state) => ({
        orders: selectOrders(state),
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            orderList: list,
        }, dispatch)
    })
)(OrderPageComponent);