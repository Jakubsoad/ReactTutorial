import React from "react";

const user = (props: any) => {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return <h2>Hey {props.username}! Current hour is {hours}:{minutes}:{seconds}</h2>;
}

export default user;