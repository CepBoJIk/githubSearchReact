import React, {Component} from 'react';
import './RepositoryDisplay.css'

class RepositoryDisplay extends Component {

  toggleSavedData = (item) => {
    this.props.toggleSavedData(item);
  }

  isSavedRepository = (item) => {
    const savedRepo = this.props.savedData;
    let index = -1;

    savedRepo.forEach((elem, i) => {
      if (elem.id === item.id) {
        index = i;
      }
    })

    return !(index === -1);
  }

  changeStarsNumber(value) {
    const numberString = String(value);
    if (numberString.length > 3) {
      const numberArray = numberString.split('');
      numberArray.splice(numberArray.length - 3, 3);
      return `${numberArray.join('')}k`;
    }
    return String(value);
  }

  render() {
    const isSavedList = this.props.isMyList;
    let template = null;
    const data = isSavedList ? this.props.savedData : this.props.data;
    
    if (data.length) {

      template = data.map((item) => {
        
        const topics = item.topics.map((topic, index) => {
          return <span key={index}>{topic}</span>
        })

        return (
          <div className="repository" key={item.id}>
            <span className="repository__stars">{this.changeStarsNumber(item.stargazers_count)}</span>
            <span className="repository__language">{item.language}</span>
            <div onClick={this.toggleSavedData.bind(this, item)}
                className={this.isSavedRepository(item) ? 'repository__checkbox checked' : 'repository__checkbox'}>
              <button className={this.props.viewType === 'tile' ? '' : 'hidden'}>
                {this.isSavedRepository(item) ? 'REMOVE FROM LIST' : 'ADD TO LIST'}
              </button>
            </div>
            <div className="repository__text">
              <h3 className="repository__name">{item.full_name}</h3>
              <p className="repository__description">{item.description}</p>
              <div className="repository__topics">
                {topics}
              </div>
            </div>
          </div>
        )
      })
    }
    
    if (!data.length && (this.props.hasRequestSent || isSavedList)) {
      template = (
        <div className="repositories-not-found">
          <h1>{isSavedList ? 'NO REPOSITORIES ADDED' : 'NO RESULTS FOUND'}</h1>
          {isSavedList ? null : <p>select other parameters and try again</p>}
        </div>
      )
    }
  
    return (        
        <div className={this.props.viewType === 'tile' ? 'repositories repository_tile' : 'repositories'}>
          {template}
        </div>
    )
  }
}

export default RepositoryDisplay;