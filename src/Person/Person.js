import React from "react"
const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Hello My name is {props.name} My Age is {props.age}</p>
        </div>
    )
}
export default person