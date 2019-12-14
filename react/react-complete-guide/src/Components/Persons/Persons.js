import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component{
  render() {
    return this.props.people.map( (item, index) => {
      return (
        <Person
          name= {item.name}
          key= {item.id}
          age= {item.age}
          changed= {(event) => this.props.nameChanged(event, item.id)}
          delete= { (event) => { this.props.deletePerson(index); } } />
      );
    });
  }
}

export default Persons
