import React, { useRef, useEffect } from 'react';
import classes from './Cockpit.css';
import WithClass from '../../Hoc/WithClass/WithClass';

const Cockpit = (props) => {
  let toggleBtnRef = useRef(null);

  useEffect(() => {
    toggleBtnRef.current.click();
    return () => {
      console.log('cleaning work done here');
    }

    // empty deps array means no dependencies so executed only once after render
  }, []) 
  const classlist = [];
  let btnClass = '';
  if(props.listLength >= 2) {
    classlist.push(classes.red)
  }
  if(props.listLength > 2) {
    classlist.push(classes.bold)
  }
  if (props.display) {
    btnClass = classes.Red;
  }
  return (
      <WithClass classes={classes.Cockpit}>
        <h2 className={classlist.join(' ')}>{props.title}</h2>
        <button
          ref = {toggleBtnRef}
          className={btnClass}
          onClick={props.toggle}>List Toggle
        </button>
        <button
          onClick={props.login}>Log In
        </button>
        <button
          onClick={props.logout}>Log Out
        </button>
      </WithClass>
  );
}

export default React.memo(Cockpit);