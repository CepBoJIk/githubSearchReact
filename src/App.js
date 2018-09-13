import React, { Component } from 'react';
import './App.css';

import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import Search from './search.component/Search';
import MyList from './my-list.component/MyList';
import logo from './img/logo.svg'

class App extends Component {
  constructor(props) {
    super(props);
    this.activePath = null;
    this.isFirstPath = true;
  }

  state = {
    savedData: [],
    isRequestSent: false,
    repositoryViewType: 'line',
    data: [],
    activeRoute: null,
  }

  saveData = (data) => {
    this.setState({data: data});
  }

  toggleSavedData = (data) => {
    let index = -1;

    this.state.savedData.forEach((item, i) => {
      if (item.id === data.id) index = i;
    });

    if (index === -1) { 
      this.setState({
        savedData: [
          ...this.state.savedData,
          data,
        ]
      })
    } else {
      const newData = this.state.savedData.filter((item) => {
        return item.id !== data.id;
      })

      this.setState({
        savedData: newData,
      })
    }
  }

  changeRequestStatus = (newsStatus) => {
    this.setState({isRequestSent: newsStatus});
  }

  changeRepositoryView = (type) => {
    this.setState({repositoryViewType: type})
  }

  render() {
    const { savedData, isRequestSent, data, repositoryViewType } = this.state;
    const { toggleSavedData, changeRequestStatus, saveData } = this;

    return (
      <div className="wrapper">
        <div className="content">
          <header>
            <div className="logo">
              <NavLink to='/search'>
                <img className='logo__img' src={logo} alt='logo'/>
                <div className="logo__text">
                  <h1>GitHub</h1>
                  <p>search</p>
                </div>
              </NavLink>
            </div>
            <nav>
              <NavLink to='/search' activeClassName="active">Search</NavLink>
              <NavLink to='/my-list' activeClassName="active">My List</NavLink>
            </nav>
          </header>
          <div className="search">
            
            <Switch>
              <Route exact path='/' render={() => {
                return <Redirect to='/search' />
              }} />
              <Route path='/search' render={() => {
                this.isFirstPath = false;
                return <Search {...{ savedData, isRequestSent, data, repositoryViewType, toggleSavedData, changeRequestStatus, saveData }}
                            changeView={this.changeRepositoryView} />
              }}/>
              <Route path='/my-list' render={() => {
                if (this.isFirstPath) return <Redirect to='/search' />
                return <MyList {...{ savedData, isRequestSent, repositoryViewType, toggleSavedData }} />
              }}/>
            </Switch>

          </div>
        </div>

        <footer>
          <p>copyright @lodossteam  2018</p>
        </footer>
      </div>  
    );
  }
}

export default App;