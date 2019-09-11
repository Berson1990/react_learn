import React, {useEffect} from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        setTimeout(() => {
            alert('save to cloud');
        }, 1000)
        return () => {
            console.log('[useEffect] clean up work in useEffect ')
        }
    }, []);

    const classesName = [];
    let btnClass = '';
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
                onClick={props.clicked}> Toggle Persons
            </button>

        </div>
    );
}
export default cockpit;