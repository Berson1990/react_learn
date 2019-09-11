import React from 'react';
import classes from './Cockpit.css'
const cockpit = (props) => {
    const classesName = [];
    let btnClass = ''
    if (props.showPersons) {
        btnClass = classes.Red
    }


    if (props.persons.length <= 2) {
        classesName.push(classes.red)
    }
    if (props.persons.length <= 1) {
        classesName.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classesName.join(' ')}>this is realy working </p>
            <button
                className={btnClass}
                onClick={props.clicked}> Toggle Persons</button>

        </div>
    );
}
export default cockpit;