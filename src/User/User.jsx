import React from "react";

const user = (props: any) => {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return <div>
            <h2>Hey {props.username}!</h2>
            <p>State: {props.children}</p>
            <p>Role: {props.role}</p>
        </div>
        ;
}

export default user;