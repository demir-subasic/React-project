import React from "react";
import './users.css'

const UsersBlock = (props) => {
    return (
        <div className="users-block">
            <p className="imena">{props.name}</p>
            <p className="prezimena">{props.lastName}</p>
        </div>
    )
}

export default UsersBlock;