// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {Heads: 0, Tails: 0}

  increaseCount = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const imgElement = document.getElementById('toss-img')
    if (tossResult === 0) {
      imgElement.src = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      this.setState(p => ({Heads: p.Heads + 1}))
    } else if (tossResult === 1) {
      imgElement.src = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      this.setState(p => ({Tails: p.Tails + 1}))
    }
  }

  render() {
    const {Heads, Tails} = this.state
    const Total = Heads + Tails
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="prg-line">Heads (or) Tails</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            alt="toss result"
            className="img"
            id="toss-img"
          />
          <button type="button" className="btn" onClick={this.increaseCount}>
            Toss Coin
          </button>
          <div className="result">
            <p className="count">Total:{Total}</p>
            <p className="count">Heads:{Heads}</p>
            <p className="count">Tails:{Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
