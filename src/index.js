import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'typeface-roboto-slab'

import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

const targetContainer = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , targetContainer
)

registerServiceWorker()
