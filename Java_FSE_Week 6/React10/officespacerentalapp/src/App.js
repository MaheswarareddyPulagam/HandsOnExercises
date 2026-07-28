import React from "react";
import officeImg from "./office.jpg";

function App() {

  const office = {
    name: "Skyline Office",
    rent: 55000,
    address: "Bangalore"
  };

  const officeList = [
    {
      id: 1,
      name: "Tech Park",
      rent: 45000,
      address: "Hyderabad"
    },
    {
      id: 2,
      name: "Business Hub",
      rent: 70000,
      address: "Chennai"
    },
    {
      id: 3,
      name: "Cyber Towers",
      rent: 85000,
      address: "Bangalore"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Office Space Rental App</h1>

      <img
        src={officeImg}
        alt="Office"
        width="400"
        height="250"
      />

      <hr />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.name}</p>

      <p>
        <b>Rent:</b>{" "}
        <span
          style={{
            color: office.rent < 60000 ? "red" : "green"
          }}
        >
          ₹{office.rent}
        </span>
      </p>

      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeList.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
            width: "350px"
          }}
        >
          <h3>{item.name}</h3>

          <p>
            <b>Rent:</b>{" "}
            <span
              style={{
                color: item.rent < 60000 ? "red" : "green"
              }}
            >
              ₹{item.rent}
            </span>
          </p>

          <p>
            <b>Address:</b> {item.address}
          </p>
        </div>
      ))}

    </div>
  );
}

export default App;