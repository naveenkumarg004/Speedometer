import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg">
        <h1 className="head">SPEEDOMETER</h1>
        <img
          className="pic"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h2 className="head-2">Speed is {speed}mph</h2>
        <p className="desc">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button className="acc-btn" type="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="brk-btn" type="button" onClick={this.onBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
