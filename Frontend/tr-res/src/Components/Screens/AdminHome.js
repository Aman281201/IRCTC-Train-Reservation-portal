import React from "react";
import { Link, useNavigation } from "react-router-dom";
import "./Home.css";

const AdminHome = () => {
  function handleTrains() {
    const date = "2022-03-04";
    fetch("/rank", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  return (
    <div>
      <Link to="/train">
        <button type="button" class="btn">
          Add Train
        </button>
      </Link>
      {/* <Link to="/Addroute"> */}
      <button
        type="button"
        class="btn"
        onClick={() => {
          handleTrains();
        }}
      >
        all trains on a given date in chrononlogical order
      </button>
      {/* </Link> */}
      <Link to="/Addroute">
        <button type="button" class="btn">
          Add Route
        </button>
      </Link>
    </div>
  );
};

export default AdminHome;
