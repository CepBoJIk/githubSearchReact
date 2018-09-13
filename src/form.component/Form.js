import React, {Component} from 'react';
import './Form.css';

import Select from '../select.component/Select';
import RestDatasource from '../rest.datasource';

const repositoriesTypes = ['Repositories'];
const languageTypes = ['javascript', 'css', 'html', 'php', 'ruby', 'c++', 'python', 'c#', 'java', 'go', 'haskel'];

class Form extends Component {

  constructor(props) {
    super(props);
    this.restDatasource = new RestDatasource();
  }

  sendRequest = () => {
    this.props.changeRequestStatus(false);
    const { repositoryType, repositoryLanguage, keywords } = this.state;
    const url = this.restDatasource.generateUrl(repositoryType, repositoryLanguage, keywords);

    this.restDatasource.getData(url).then(
      (response) => {
        this.props.saveData(response.data.items)
        this.props.changeRequestStatus(true);
      }
    )
  }

  state = {
    repositoryLanguage: '',
    repositoryType: '',
    keywords: '',
    formSubmitted: false,
  }

  submitForm = (event) => {
    event.preventDefault();
    this.setState({
      formSubmitted: true
    });

    if (!this.validateForm()) return false

    this.sendRequest();

    this.setState({
      formSubmitted: false,
      keywords: '',
    });
  }

  validateForm() {
    const properties = Object.keys(this.state);
    let validated = true;

    properties.forEach((key) => {
      if (key === 'formSubmitted') return;
      const value = this.state[key].trim();
      if (!value.length) validated = false;
    })

    return validated;
  }

  changeFormStateValue = (value, key) => {
    this.setState({
      [key]: value,
    })
  }

  changeKeywords = (event) => {
    const value = event.target.value;
    this.changeFormStateValue(value, 'keywords');
  }

  render() {
    return (
      <form className='searchForm' onSubmit={this.submitForm}>
        <Select data={repositoriesTypes} stateKey='repositoryType' changeStateValue={this.changeFormStateValue} />
        <Select data={languageTypes} stateKey='repositoryLanguage' changeStateValue={this.changeFormStateValue} />
        <div className="searchFrom__keywords">
          <label>
            <span className={this.state.formSubmitted && !this.validateForm() ? 'invalid': ''}>Type here for search</span>
            <input type="text" value={this.state.keywords} onChange={this.changeKeywords}/>
          </label>
        </div>
        <button type="submit">search</button>
      </form>
    )
  }
}

export default Form;