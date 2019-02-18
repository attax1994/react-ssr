import React from 'react'
import {hydrate} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/app'

/**
 * server端渲染的初始页面获取后，需要在client端初始化react和redux，保证mvvm的正常运行
 */

/**
 * 1.从服务器渲染的内容中读取state，然后向用户隐藏
 */
const state = window.__STATE__
delete window.__STATE__
document.body.removeChild(document.querySelector('#state'))

/**
 * 2.创建redux store
 */
const store = configureStore(state)

/**
 * 3.将页面重新聚合，保证client端的渲染内容和server端一致
 */
hydrate(
  <Provider store={store} >
    <App />
  </Provider>,
  document.querySelector('#app')
)

