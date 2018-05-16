import * as React from 'react'
import './BudgetCounter.css'
import IBudgetCounter from './IBudgetCounter'

import { colorPalette, IColor, RED } from '../../utils/color-palette'

const BudgetCounter = ({name, money, spentMoney}: IBudgetCounter) => {

  const positiveBudget = (money > spentMoney)

  const randomColor: IColor = colorPalette[
    Math.floor(Math.random() * colorPalette.length)
  ]

  const style = {
    backgroundColor: positiveBudget ? randomColor.hexadecimal : RED.hexadecimal,
    color: positiveBudget ? randomColor.fontColor : RED.fontColor
  } as React.CSSProperties

  const currentAvailableMoney = money - spentMoney

  return (
    <div className="container" style={style}>
      <span> $ { currentAvailableMoney } </span>
      <span className="subtitle">{name} </span>
    </div>
  )
}

export default BudgetCounter
