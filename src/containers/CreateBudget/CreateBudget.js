import React from 'react'
import PropTypes from 'prop-types'
import './CreateBudget.css'

class CreateBudget extends React.Component {
  static propTypes = {
    onCreate: PropTypes.function
  }

  state = {
    nome: '',
    limite: ''
  }

  render () {
    return (
      <div className="create-budget">
        <h1> Novo Budget </h1>
        <div className="form-create-budget">
          <input placeholder="Nome"
            type="text"
            value={this.state.nome}
          />
          <input placeholder="Limite"
            type="numeber"
            inputmode="numeric"
            pattern="[0-9]*"
            value={this.state.limite}
          />
          <button onClick={(e) => console.log(e)}>
            Add Budget
          </button>
        </div>
      </div>
    )
  }
}


export default CreateBudget
