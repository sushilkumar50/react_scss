import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import Aux from '../Hoc/Aux/Aux';
import withClass from '../Hoc/anotherWithClass/anotherWithClass';
import AuthContext from '../context/auth-context';


class App extends Component {
  state = {
    people: [
      {id: 'firsrt', name: 'Thakur', age: 24},
      {id: 'second', name: 'Kuldeeep', age: 23},
      {id: 'third', name: 'Mohit', age: 25}
    ],
    displayPersonList: false,
    isLoggedIn: false
  }

  listToggleHandler = (event) => {
      const listDisplay = this.state.displayPersonList;
      this.setState({
        displayPersonList: !listDisplay
      });
  }

  nameChangeHandler = (event, changedId) => {
    const personIndex = this.state.people.findIndex(person => person.id === changedId);
    const person = {...this.state.people[personIndex]};
    person.name = event.target.value;
    const personList = [...this.state.people];
    personList[personIndex] = person;

    this.setState({ people: personList });
    // if new state depend on old state dont use direct update bcoz react state updates are not done 
    // intstan with this aproach these are scheduled so may cauase some ambiguity
    // isted use callback aproach which gives instant update
    // this.setState((newState, oldState) => {})
    event.stopPropagation()
  }

  deletePersonHandler = (personIndex) => {
      const personList = [...this.state.people];
      personList.splice(personIndex, 1);
      this.setState({
        people: personList
      });
  }

  loginHandler = () => {
    this.setState({
      isLoggedIn: true
    });
  }

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false
    });
  }


  render() {
      let personList = null;
      if (this.state.displayPersonList) {
        personList = <Persons
                      people={this.state.people} 
                      nameChanged= {this.nameChangeHandler} 
                      deletePerson={this.deletePersonHandler} />
        }
      return (
        <Aux>
          <AuthContext.Provider value={{isLoggedIn: this.state.isLoggedIn, login: this.authHandler}}>
          <Cockpit
            title={this.props.appTitle}
            login={this.loginHandler}
            logout={this.logoutHandler}
            listLength={this.state.people.length}
            display={this.state.displayPersonList}
            toggle={this.listToggleHandler}/>
          {personList}
          </AuthContext.Provider>
        </Aux>
      );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi React'))
  }
}

export default withClass(App, classes.App);
