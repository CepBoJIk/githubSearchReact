import React, { Component } from 'react';
import './RepositoryView.css';

class RepositoryView extends Component {

  changeView = (event) => {
    const target = event.currentTarget;
    const viewType = target.getAttribute('data-view');

    this.props.changeView(viewType);
  }

  render() {
    return (
      <div className="viewFilter">
        <button data-view='tile' onClick={this.changeView}
              className={this.props.repositoryViewType === 'tile' ? 'active viewFilter__tile' : 'viewFilter__tile'}>
          <svg  width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H14V14H0V0Z" fill="#E0E0E0"/>
            <path d="M18 0H32V14H18V0Z" fill="#E0E0E0"/>
            <path d="M0 17H14V31H0V17Z" fill="#E0E0E0"/>
            <path d="M18 17H32V31H18V17Z" fill="#E0E0E0"/>
          </svg>
        </button>
        <button data-view='line' onClick={this.changeView} 
              className={this.props.repositoryViewType === 'line' ? 'active viewFilter__line' : 'viewFilter__line'}>
          <svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="2" x2="33" y2="2" stroke="#E0E0E0" strokeWidth="4"/>
            <line y1="15" x2="33" y2="15" stroke="#E0E0E0" strokeWidth="4"/>
            <line y1="27" x2="33" y2="27" stroke="#E0E0E0" strokeWidth="4"/>
          </svg>
        </button>
      </div>
    )
  }
}

export default RepositoryView;