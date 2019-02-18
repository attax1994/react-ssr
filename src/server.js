import React from 'react'
import {renderToString} from 'react-dom/server'

import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/app'

module.exports = function render(initialState) {
  /**
   * 1. 根据initialState创建redux store
   */
  const store = configureStore(initialState)
  /**
   * 2. 在server端建立App，并转换为HTML
   */
  let content = renderToString(
    <Provider store={store}>
      <App/>
    </Provider>,
  )

  /**
   * 3. 获取redux store的state，用于提供给上层
   */
  const preloadedState = store.getState()

  return {content, preloadedState}
}