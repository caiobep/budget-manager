import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import SwipeableRoutes from 'react-swipeable-routes'

import AppBar from '../../components/AppBar'
import CreateBudget from '../CreateBudget'

import MyBudget from '../MyBudget'
import Settings from '../Settings'
import NotFound from '../NotFound'

import './App.css'

class App extends Component {

  static state = {
    budgets: null,
    criandoBudget: false
  }

  render() {
    return (
      <div className="app-container">

        <div className="app-body">
          <SwipeableRoutes>
            <Route path="/settings" component={Settings} />
            <Route path="/" exact component={MyBudget} />
            <Route path="/create" component={CreateBudget} />
          </SwipeableRoutes>
        </div>

      </div>
    )
  }
}

export default App
