import React, {useState} from "react";

const Customer = () => {

    const [customerState, setCustomerState] = useState({
        names: ['Joe', 'Brian', 'Tom'],
        pickedName: 'Tom'
    });

    const [namesState, setNamesState] = useState({

    });

    const switchName = () => {
        const namesPool = customerState.names;
        let number = Math.floor(Math.random()*3);
        setCustomerState({names: namesPool, pickedName: namesPool[number]});
    }

    return (
        <div>
            <h2>Customer: </h2>
            <h3>{customerState.pickedName}</h3>
            <button onClick={switchName}>Change name</button>
        </div>
    );
}

export default Customer;
