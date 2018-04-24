import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import AppBar from '../../components/AppBar'

import MyBudget from '../../containers/MyBudget'

import './App.css'

class App extends Component {

  static state = {
    budgets: null,
    criandoBudget: false
  }

  render() {
    return (
      <div className="app-container">
        <AppBar title="My Budget"/>

        <div className="app-body">
          <Switch>
            <Route path="/" component={MyBudget} />

          </Switch>
        </div>

      </div>
    )
  }
}

export default App
