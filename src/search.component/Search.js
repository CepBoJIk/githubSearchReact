import React, { Component } from 'react';
import './Search.css';

import Form from '../form.component/Form';
import RepositoryView from '../repository-view.component/RepositoryView';
import RepositoryDisplay from '../repository-display.component/RepositoryDisplay';

class Search extends Component {

  render() {
    const {saveData, savedData, data, changeRequestStatus, repositoryViewType, changeView, toggleSavedData} = this.props;

    return (
      <React.Fragment>
        <Form {...{ changeRequestStatus, saveData }}/>
        <RepositoryView {...{ repositoryViewType, changeView }} />

        <RepositoryDisplay {...{ data, savedData, toggleSavedData }} 
            hasRequestSent={this.props.isRequestSent}
            viewType={this.props.repositoryViewType} />
      </React.Fragment>
    )
  }
}

export default Search;