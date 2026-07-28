import React, { useState } from "react";
import Guest from "./components/Guest";
import User from "./components/User";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };


  return (
    <div>
      <h1>Flight Ticket Booking App</h1>

      {
        isLoggedIn ?
        <User logout={logout} /> :
        <Guest login={login} />
      }

    </div>
  );
}

export default App;