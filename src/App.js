import React, { Component } from 'react';
import logo from './logo.svg';
import Modal from './modal'
import './App.css';
import { connect } from 'react-redux'
import { init, update } from './reducer/index.js'
import Modal1 from './modal_1'

class App extends Component {
  openModal() {
    console.log(this.props);
    if(this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.props.handleOpen}>Click1</button>
        <button onClick={this.openModal.bind(this)}>Click2</button>
        <button onClick={this.openModal.bind(this)}>Click3</button>
        <Modal1 />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleOpen: () => {
      dispatch({type: 'OPEN', name: '1'})
    }
  }
};

export default App = connect(null, mapDispatchToProps)(App)
