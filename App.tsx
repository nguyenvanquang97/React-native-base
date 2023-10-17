import React, { Component } from 'react';
//Redux
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './redux/reducers';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/rootSaga';

import ListSon from './redux/components/ListSon';
import RegistrationForm from './redux/components/RegistrationForm';
import { MenuProvider } from 'react-native-popup-menu';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//Middleware
const sagaMiddleware = createSagaMiddleware();
//Từ applyMiddleware vào Reducers thì tạo một store, sagaMiddleware nằm giữa Action và Reducers.
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => (
  <Provider store={store}>
    <MenuProvider>
    <SafeAreaProvider>
    <ListSon />
    </SafeAreaProvider>
    </MenuProvider>
  </Provider>
);
export default class AppSaga extends Component {
  render() {
    return <App />;
  }
}

sagaMiddleware.run(rootSaga); //Chạy xuyên suốt các hàm rootSaga trong app 
