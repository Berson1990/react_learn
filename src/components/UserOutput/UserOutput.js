import React from 'react';
import './UserOutput.css'
const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>React Assginment</p>
            <p>UserName :{props.userName} </p>
        </div>
    )
}
export default userOutput