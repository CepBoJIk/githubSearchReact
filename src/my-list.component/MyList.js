import React, { Component } from 'react';
import RepositoryDisplay from '../repository-display.component/RepositoryDisplay';
import './MyList.css';

class MyList extends Component {

  render() {
    const { data, savedData, toggleSavedData } = this.props;

    return (
      <div className="my-list">
        <h1 className="my-list__header">My List</h1>
        <RepositoryDisplay {...{ data, savedData, toggleSavedData }}
            hasRequestSent={this.props.isRequestSent}
            viewType={this.props.repositoryViewType}
            isMyList={true} />
      </div>
    )
  }
}

export default MyList;