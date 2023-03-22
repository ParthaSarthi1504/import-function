// Write your code here
import './index.css'
import {Component} from 'react'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(preState => ({count: preState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked{' '}
          <span className="counter-design" onClick={this.onIncrement}>
            {count}
          </span>{' '}
          times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button className="btn">click me</button>
      </div>
    )
  }
}

export default Counter
