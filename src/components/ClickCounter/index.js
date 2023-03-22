// Write your code here
import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked{' '}
          <span className="counter-design">{count}</span> times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button type="button" className="btn" onClick={this.onIncrement}>
          click me
        </button>
      </div>
    )
  }
}

export default Counter
