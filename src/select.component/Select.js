import React, { Component } from 'react';
import './Select.css';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataArray: this.props.data,
      selected: this.props.data[0],
      viewList: false,
    }

    this.props.changeStateValue(this.state.selected, this.props.stateKey);
  }

  toggleView = () => {
    this.setState({
      viewList: !this.state.viewList,
    })
  }

  changeSelected = (event) => {
    const target = event.target;
    const value = target.id;

    this.setState({
      selected: value,
      viewList: false,
    });

    this.props.changeStateValue(value, this.props.stateKey);
  }

  render() {
    return (
      <div className='select-wrapper'>
        <div className='select' onClick={this.toggleView}>
          {this.state.selected}
        </div>
        <ul className={this.state.viewList ? 'options' : 'options hidden'}>
          {
            this.state.dataArray.map((item, index) => {
              return <li key={index} id={item} onClick={this.changeSelected}>{item}</li>
            })
          }
          <li></li>
        </ul>
      </div>
    )
  }
}

export default Select;