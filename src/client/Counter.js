import React from 'react'

class Counter extends React.Component {
  state = {
    count: 1
  }
  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  del = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        {this.state.count} <br />
        <button onClick={this.add}>+</button>
        <button onClick={this.del}>-</button>
      </div>
    )
  }
}

export default Counter
