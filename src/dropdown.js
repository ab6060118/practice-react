import React, { Component } from 'react';

const style = {
  dropdown: {
    textAlign: 'left',
  },
  label: {
    width: '160px',
    float: 'left',
  },
  span: {
    width: '18px',
    float: 'right',
    textAlign: 'center',
    borderLeft: '1px solid #C1C1C1',
  },
  input: {
    position: 'relative',
    width: '180px',
    border: '1px solid #C1C1C1',
    display: 'inline-block',
    cursor: 'pointer',
  },
  item: {
  },
  menu: {
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: '1',
    border: '1px solid #C1C1C1',
    boxSizing: 'unset',
    marginLeft: '-1px',
  }
};

class Item extends Component {
  constructor() {
    super()
    this.state = {
      isHorver: false
    }
  }

  changeStyle() {
    if(this.state.isHorver) {
      return {...style.item, backgroundColor: '#defefe'}
    }
    return {...style.item, backgroundColor: 'transparent'}
  }

  onMouceHover() {
    this.setState({isHorver: true})
  }

  onMouseOut() {
    this.setState({isHorver: false})
  }

  onClick(e) {
    if(this.props.handleSelect)
      this.props.handleSelect(e.target.textContent)
  }

  render() {
    return (
      <div style={this.changeStyle.bind(this)()} 
           onMouseOver={this.onMouceHover.bind(this)}
           onMouseOut={this.onMouseOut.bind(this)}
           onClick={this.onClick.bind(this)}
           data-value={this.props.text}>
           {this.props.text}
      </div>
    )
  }
}

export default class Dropdown extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      value: 'Place holder',
    }
  }

  handleClick(e) {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleSelect(value: string) {
    this.setState({value: value})
    this.handleClick()
  }

  render() {
    let list = null
    console.log(this.state);

    if(this.state.isOpen) {
      list = (
        <div id={this.props.id} style={style.menu}>
          {
            this.props.options.map((text:string, key:number)=><Item key={key} text={text} handleSelect={this.handleSelect.bind(this)}/>)
          }
        </div>
      )
    }

    return (
      <div style={style.dropdown}>
        <label style={style.label} htmlFor={this.props.id}>{this.props.text}</label>
        <div style={style.input}>
          <div onClick={this.handleClick.bind(this)}>
            {this.state.value}
            <span style={style.span}>+</span>
          </div>
          {list}
        </div>
      </div>
    )
  }
}

