import React from "react";


function User(props){

    return(
        <div>

            <h2>Welcome Logged In User</h2>

            <h3>You can book flight tickets now</h3>

            <button>
                Book Ticket
            </button>

            <br/><br/>

            <button onClick={props.logout}>
                Logout
            </button>

        </div>
    );

}

export default User;