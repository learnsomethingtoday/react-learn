import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props){
    super(props)
    this.state = {
      message:"hello"
    }
  }
  clickHandler(){
    this.setState({
      message:"bye"
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        <button onClick={() => this.clickHandler()}>Click</button>
      </div>
    )
  }
}

export default EventBind
