import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import AppBar from '../../components/AppBar'
import CreateBudget from '../CreateBudget'

import MyBudget from '../MyBudget'
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
          <Switch>
            <Route path="/" exact component={MyBudget} />
            <Route path="/create" component={CreateBudget} />

            <Route component={NotFound} />
          </Switch>
        </div>

      </div>
    )
  }
}

export default App
