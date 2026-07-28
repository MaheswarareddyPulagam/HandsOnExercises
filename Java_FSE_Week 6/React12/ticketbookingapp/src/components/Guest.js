import React from "react";
import FlightDetails from "./FlightDetails";


function Guest(props){

    return(
        <div>

            <h2>Welcome Guest User</h2>

            <FlightDetails />

            <button onClick={props.login}>
                Login
            </button>

        </div>
    );

}

export default Guest;