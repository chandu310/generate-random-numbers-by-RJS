// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onIncrement = () => {
    const number = Math.floor(Math.random() * 101)
    this.setState(() => ({count: number}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.onIncrement}>
            Generate
          </button>
          <p className="counter">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
