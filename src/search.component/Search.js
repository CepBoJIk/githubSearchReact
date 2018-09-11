import React, { Component } from 'react';
import './Search.css';
import Select from '../select.component/Select';

const repositoriesTypes = ['Repositories'];
const languageTypes = ['javascript', 'css', 'html', 'php', 'ruby', 'c++', 'python', 'c#', 'java', 'go', 'haskel'];

class Search extends React.Component {
  state = {
    repositoryType: '',
    repositoryLanguage: '',
    keywords: '',
  }

  changeStateValue = (value, key) => {
    this.setState({[key]: value});
  }

  render() {
    return (
      <form>
        <Select data={repositoriesTypes} stateKey='repositoryType' changeStateValue={this.changeStateValue} />
        <Select data={languageTypes} stateKey='repositoryLanguage' changeStateValue={this.changeStateValue} />
        <div class="searchFrom__keywords">
          <label>
            <span>Type here for search</span>
            <input type="text" />
          </label>
        </div>
      </form>
    )
  }
}

export default Search;