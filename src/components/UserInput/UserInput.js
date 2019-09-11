import React from 'react'
import './UserInput.css'
const userInput = (props) => {
    return (
        <div className="UserInput">
            <input type="text" onChange={props.changeUserName} value={props.userName} placeholder="Enter User Name" />
        </div>
    );
}
export default userInput;