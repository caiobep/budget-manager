import React from 'react'
import PropTypes from 'prop-types'
import './BudgetCounter.css'

import { randomColor, colorPalette } from '../../utils/color-palette'

const red = colorPalette.filter(
  ({name}) => (name === 'nord11')
).shift().hexadecimal

const BudgetCounter = ({name, money, spentMoney}) => {

  const positiveBudget = (money > spentMoney)

  const style = randomColor(
    ({hexadecimal, fontColor}) => ({
      backgroundColor: positiveBudget ? hexadecimal : red,
      color: positiveBudget ? fontColor : '#87313b'
    })
  )

  const currentAvailableMoney = money - spentMoney

  return (
    <div className="container" style={style}>
      <span className="value-changer">+</span>
      <span> $ { currentAvailableMoney } </span>
      <span className="value-changer">-</span>
    </div>
  )
}

BudgetCounter.propTypes = {
  name: PropTypes.string,
  money: PropTypes.number.isRequired,
  spentMoney: PropTypes.number
}

BudgetCounter.defaultProps = {
  name: '',
  spentMoney: 0
}

export default BudgetCounter
