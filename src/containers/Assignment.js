import React, { Component } from 'react';
import ValidationInput from './Validation/Validation'
import Char from './Char/Char';
import './App.css';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput'
class Assignment extends Component {

    state = {
        stringOutputLength: ''
    }
    // userNameManipulateHandlare = (event) =>{
    // console.log(event.target.value)
    //   this.setState({
    //     userName : event.target.value
    //   }) 
    // } 


    printStringHandlare = (event) => {
        this.setState({ stringOutputLength: event.target.value})
    }

    deleteCharHandlar = (Letterindex) => {
        const letters = this.state.stringOutputLength.split('');
        letters.splice(Letterindex, 1);
        const updatedText = letters.join('')
        this.setState({ stringOutputLength: updatedText })
    }


    render() {
        const char = this.state.stringOutputLength.split('').map((str, index) => {
            return <Char
                char={str}
                key={index}
                deleted={() => this.deleteCharHandlar(index)}
            />
        });

        return (
            <div className="App">
                <h1>Assignment</h1>
                <input type="text" placeholder="Enter Text" onChange={this.printStringHandlare} />
                <ValidationInput length={this.state.stringOutputLength} />
                <p>Text Length is : {this.state.stringOutputLength}</p>
                {char}
            </div>

            // <UserInput changeUserName={this.userNameManipulateHandlare} userName={this.state.userName} />
            //     <UserOutput userName={this.state.userName} />
            //     <UserOutput userName={this.state.userName} />
            //     <UserOutput userName="Gehad" /> 

        );

    }
}
export default Assignment