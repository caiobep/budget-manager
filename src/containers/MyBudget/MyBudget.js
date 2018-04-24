import React from 'react';
import PropTypes from 'prop-types';
import BudgetCounter from '../../components/BudgetCounter'
import './MyBudget.css'

const MyBudget = () => (
  <div className="budgets-container">
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

    <div className="budget-creator">
      <span>+</span>
      <span> Novo Budget </span>
    </div>
  </div>
)

export default MyBudget
