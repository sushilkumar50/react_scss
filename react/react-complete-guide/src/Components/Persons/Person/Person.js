import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';

import WithClass from '../../../Hoc/WithClass/WithClass';
import AuthContext from '../../../context/auth-context';
// import styled from 'styled-components';
// import Radium from 'radium';

class Person extends Component{
    constructor( props ) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
    }
    render() {
        return (
                <WithClass classes={classes.Person}>
                    {/* <AuthContext.Consumer>
                        another aproach
                        {
                            context => context.isLoggedIn ? <p>Authenticate</p> : <p>please log in</p>
                        }
                    </AuthContext.Consumer> */}
                    {this.context.isLoggedIn ? <p>Authenticate</p> : <p>please log in</p>}
                    <p onClick={this.props.delete}>{this.props.name} is a {this.props.age} years old civil Engineer</p>
                    <input 
                        type="text" 
                        ref = {this.inputElementRef}
                        /* another aproach for element ref */
                        /* ref = {(inputEl) => {this.inputElRef = inputEl}} */
                        onBlur={this.props.changed} 
                        defaultValue={this.props.name} />
                </WithClass>
            );
    }
}

Person.propTypes = {
    delete: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;