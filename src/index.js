import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-roboto-slab'

import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

const targetContainer = document.getElementById('root')

ReactDOM.render(
  <App />,
  targetContainer
)

registerServiceWorker()
