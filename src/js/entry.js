import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from './configureStore'
import App from './components/App'
let store = configureStore()
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
)

