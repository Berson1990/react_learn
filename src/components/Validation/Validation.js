import React from 'react';

const validationInput = (props) => {
    var TextValidation = 'text long enough'
     if (props.length <= 5) {
        TextValidation = 'text too short'
    } 
    return (
        <div>
            <p>{TextValidation}</p>
        </div>
    );


}
export default validationInput;