import * as React from 'react'
import { Route } from 'react-router-dom'
// @ts-ignore
import {default as SwipeableRoutes} from 'react-swipeable-routes'

import CreateBudget from '../CreateBudget'

import MyBudget from '../MyBudget'
import Settings from '../Settings'
import './App.css'

const App = () => (
  <div className='app-container'>

    <div className='app-body'>
      <SwipeableRoutes replace={true}>
        <Route path='/settings' component={Settings} />
        <Route path='/' exact={true} component={MyBudget} />
        <Route path='/create' component={CreateBudget} />
      </SwipeableRoutes>
    </div>

  </div>
)

export default App
