import React from 'react'
import './CreateBudget.css'

class CreateBudget extends React.Component {

  state = {
    nome: '',
    limite: ''
  }

  render () {
    return (
      <div className="create-budget">
        <h1 className="page-title"> New Budget </h1>
        <div className="form-create-budget">
          <input placeholder="Tag"
            type="text"
            value={this.state.nome}
          />
          <input placeholder="Size"
            type="numeber"
            inputMode="numeric"
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
