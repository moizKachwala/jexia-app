import {takeEvery, put} from 'redux-saga/effects';

import * as actions from '../actions/orders';
import {dataModule} from '../jexiaConfiguration';

function* list() {
    try {
        yield put({type: actions.ORDERS_LIST_PENDING});
        
        const payload = yield dataModule
                                .dataset("orders")
                                .select()
                                .execute();

        yield put({type: actions.ORDERS_LIST_FULFILLED, payload});
    } catch (error) {
        yield put({type: actions.ORDERS_LIST_REJECTED});
    }
}

export default function* () {
    yield takeEvery(actions.ORDERS_LIST, list);
}
