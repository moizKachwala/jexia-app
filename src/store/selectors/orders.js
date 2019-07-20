import {createSelector} from 'reselect';

export const selectOrderList = (state) => state.orders.data;

export const selectOrders = createSelector(
    selectOrderList,
    (orders) => orders,
);

export const createOrderSelector = (selectOrderId) => createSelector(
    selectOrders,
    selectOrderId,
    (orders, orderId) => orders.find((order) => order.ID === orderId)
);