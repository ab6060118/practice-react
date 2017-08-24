import React, { Component } from 'react';

const style = {
  window: {
    position: 'fixed',
    height: '600px',
    width: '400px',
    top: 'calc(50% - 300px)',
    left: 'calc(50% - 200px)',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '3px',
    padding: '20px'
  },
  button: {
  }
}

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      dragging: false,
      pos: {
        x: style.window.left,
        y: style.window.top,
      },
      rel: null,
    }
  }

  componentDidUpdate(props, state) {
    if (this.state.dragging && !state.dragging) {
      document.addEventListener('mousemove', this.onMouseMove.bind(this))
      document.addEventListener('mouseup', this.onMouseUp.bind(this))
    } else if (!this.state.dragging && state.dragging) {
      document.removeEventListener('mousemove', this.onMouseMove.bind(this))
      document.removeEventListener('mouseup', this.onMouseUp.bind(this))
    }
  }

  // calculate relative position to the mouse and set dragging=true
  onMouseDown(e) {
    console.log(this.refs)
    // only left mouse button
    if (e.button !== 0) return
    var pos = {
      top: this.containerLine.offsetTop,
      left: this.containerLine.offsetLeft
    }

    this.setState({
      dragging: true,
      rel: {
        x: e.pageX - pos.left,
        y: e.pageY - pos.top
      }
    })
    e.stopPropagation()
    e.preventDefault()
  }
  onMouseUp(e) {
    this.setState({dragging: false})
    e.stopPropagation()
    e.preventDefault()
  }
  onMouseMove(e) {
    if (!this.state.dragging) return
    this.setState({
      pos: {
        x: (e.pageX - this.state.rel.x).toString() + 'px',
        y: (e.pageY - this.state.rel.y).toString() + 'px',
      }
    })
    e.stopPropagation()
    e.preventDefault()
  }

  handleClick() {
    if(this.props.clickClose) {
      this.props.clickClose()
    }
  }

  render() {
    return (
      <div style={{...style.window, top: this.state.pos.y, left: this.state.pos.x}} ref={el => this.containerLine = el}>
        <button onClick={this.handleClick.bind(this)}>Close</button>
        <div style={{cursor: 'move'}} onMouseDown={this.onMouseDown.bind(this)}>
          <h1>Title</h1>
        </div>
        {this.props.children}
      </div>
    )
  }
}
