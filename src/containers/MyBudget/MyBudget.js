import React from 'react';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';
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
      <Link to="/create">
        <span id="buget-creator-icon">+</span>
        <span> New Budget </span>
      </Link>
    </div>
  </div>
)

export default MyBudget
