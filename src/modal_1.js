import Modal from './modal'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import Dropdown from './dropdown'

class Modal1 extends Component {
  componentWillMount() {
    this._init()
  }

  _init() {
    if(this.props.register)
      this.props.register()
  }

  render() {
    console.log(this.props);
    var modal = null
    let list = [ '1','2','3' ]

      modal = <Modal handleClose={this.props.handleClose} id="account_input"><Dropdown options={list} text="Email account:" /></Modal>

    return (
      <div>
      {modal}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.windowReducer.filter(window=>window.name=='1')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: () => {
      dispatch({type: 'REGISTER', name: '1'})
    },
    handleClose: () => {
      dispatch({type: 'CLOSE', name: '1'})
    }
  }
}

export default Modal1 =  connect(mapStateToProps, mapDispatchToProps)(Modal1)
