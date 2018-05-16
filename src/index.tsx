import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'typeface-roboto-slab'

import App from './containers/App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

const targetContainer = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , targetContainer as HTMLElement
)

registerServiceWorker()
