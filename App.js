import { View, Text } from 'react-native'
import React from 'react'
import Main from './Main.jsx';
import {Provider} from 'react-redux'
import { store } from './redux/store.js';

export default function App () {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}