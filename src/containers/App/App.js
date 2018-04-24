import React from 'react'
import BudgetCounter from '../../components/BudgetCounter'

const App = () => (
  <div className="app-container">
    <BudgetCounter
      money={200}
      name='Main Budget'
      spentMoney={42}
    ></BudgetCounter>
    <BudgetCounter
      money={200}
      name='Main Budget'
      spentMoney={58}
    ></BudgetCounter>
    <BudgetCounter
      money={200}
      name='Main Budget'
      spentMoney={298}
    ></BudgetCounter>
  </div>
)

export default App
