import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Booking from "./Booking";
import "./Home.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { DateRangeTwoTone } from "@mui/icons-material";

const Home = () => {
  useEffect(() => {
    fetch("/station", {
      headers: {
        // Authorization: "Bearer" + localStorage.getItem("")
      },
    })
      .then((res) => res.json())
      .then((result) => {
        //     result.map((e)=>{console.log(e[1])})
        setStationData(result);
        console.log(stationData);
      });
  }, []);

  const buttonHandler = () => {
    navigate(`/booking/${pickup}/${destination}/${date}`);
    // fetch("/fromatob",{
    //     method:"post",
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body: JSON.stringify({
    //         pickup,
    //         destination,
    //         date
    //     }),

    // }).then((res)=> res.json()).then((result) => {console.log(result)})
  };
  const [stationData, setStationData] = useState([]);
  const [pickup, changePickup] = useState("");
  const [p, changeP] = useState("");
  const [destination, changeDestination] = useState("");
  const [d, changeD] = useState("");
  const [date, changeDate] = useState("");
  const navigate = useNavigate();

  console.log(pickup);
  console.log(destination);
  console.log(date);
  function handle(e){
      changePickup(e.target.value)
      changeP(e.target.name)
  }
  function handle2(e){
    changeDestination(e.target.value)
    changeD(e.target.name)
}
  return (
    <div className="container">
      <div className="frm">
        <form>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Pickup
            </InputLabel>
            <Select
              name="gender"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="GENDER"
              value={pickup}
              onChange={(e) => handle(e)}
            >
              {stationData.map((e) => {
                return <MenuItem value={e[0]} name={e[1]}>{e[1]}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label2">
              Destination
            </InputLabel>
            <Select
              name="gender"
              labelId="demo-simple-select-standard-label2"
              id="demo-simple-select-standard2"
              label="GENDER"
              value={destination}
              onChange={(e) => handle2(e)}
            >
              {stationData.map((e) => {
                return <MenuItem value={e[0]} name={e[1]}>{e[1]}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <br />
          <br />
          <label>
            date of departure (yyyy-mm-dd):
            {/* <DatePicker selected={date} onChange={(date) => changeDate(date)} /> */}
            <input value={date} onChange={(e) => changeDate(e.target.value)} />
            <Link to={`/booking/${pickup}/${destination}/${date}`}>
              <button
                type="submit"
                onClick={() => {
                  console.log("abinn");
                  //   buttonHandler();
                }}
              >
                submit
              </button>
            </Link>
          </label>
          <br />
        </form>
      </div>
      {/* </div> */}
      <div className="advertisement">
        {/* <img className="image" src="" alt="" /> */}
      </div>
    </div>
  );
};

export default Home;
