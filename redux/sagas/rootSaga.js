import { all } from 'redux-saga/effects';

import { sayHello, watchData, watchGetData, watchRegister } from './counterSagas';
import { watchIncrement, watchDecrement } from './counterSagas';

export default function* rootSaga() {
    yield all([
        watchData(),
        watchGetData(),
    ]);
}
