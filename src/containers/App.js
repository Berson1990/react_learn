import React, {Component} from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor')
    }

    static toogle = '';
    state = {
        persons: [
            {id: 'a1', name: 'Mahmoud', age: 29},
            {id: 'a2', name: 'Gehad', age: 27},
            {id: 'a3', name: 'Eyad', age: 2}
        ],
        userName: 'Eyad Bassam',
        showPersons: false,
        ShowCockpit: true
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

// componentWillMount(){
//   console.log('[App.js] componentWillMount')
// }
    componentDidMount() {
        console.log('[App.js] componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate')
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate')
    }

    switchNameHandler = (NewName) => {
        this.setState({
            persons: [
                {name: NewName, age: 29},
                {name: 'Gehad', age: 26},
                {name: 'Eyad', age: 2.5}
            ]
        })
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.person.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };
    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons})
    };

    togglePersonsHandlare = () => {
        const DoseShow = this.state.showPersons;
        this.setState({showPersons: !DoseShow})
    };


    render() {
        console.log('[App.js] render');
        let persons = null;
        if (this.state.showPersons) {
            persons = (

                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                />

            );

        }


        return (
            // <div className={[classes.App,classes.bold].join(' ')}>
            <div className={[classes.App, classes.bold].join(' ')}>
                <button onClick={() => {
                    this.setState({ShowCockpit: false})
                }}>Remove Cockpit
                </button>
                {this.state.ShowCockpit ? (<Cockpit
                    title={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandlare}
                />) : null}
                {persons}
            </div>

        );
        // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Dose this work Now'))
    }
}

export default App;
