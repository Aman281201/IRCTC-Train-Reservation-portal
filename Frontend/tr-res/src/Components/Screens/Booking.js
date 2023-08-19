import React, { useState, useEffect } from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import "./Booking.css";
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BookingCard from "../booking/bookingCard";
import { Start } from "@mui/icons-material";
import { Route, useParams, Link, useNavigate } from "react-router-dom";

const Booking = () => {
  const [trainData, setTrainData] = useState([]);
  const { start, end, date } = useParams();
  // var start
  // var end
  // var date
  console.log(start + end + date);
  // useEffect();
  // const [startStation, setStartStation] = useState(props.start);
  // const [endStation, setEndStation] = useState(props.end);

  // const reverseHandler = (startStation) => {
  //     const s = { startStation };
  //     setStartStation(endStation);
  //     setEndStation(s);
  // };

  useEffect(() => {
    

    console.log(start + " " + end + " " + date);

    fetch("/fromatob", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pickup: start,
        destination: end,
        date,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setTrainData(result);
      });

    // fetch("/station", {
    //   headers: {
    //     Authorization: "Bearer" + localStorage.getItem("jwt"),
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((result) => {

    //     setStationData(result);

    //   });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#0F4C75",
          paddingTop: "5px",
          paddingBottom: "5px",
          justifyContent: "space-around",
        }}
      >
        <div className="grid align-items-center">
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            style={{ textAlign: "center" }}
          >
            <InputLabel
              style={{ color: "#BBE1FA" }}
              id="demo-simple-select-standard-label"
            >
              <LocationOnIcon /> FROM
            </InputLabel>
            {start}
            {/* <Select
              className="px-[5px] w-[150px] rounded-md text-white"
              name="gender"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="GENDER"
            >
              {stationData !== [] &&
                stationData.map((e) => {
                  // return(({startStation}===e)?(<option value={e} selected disabled>{e}</option>) :(<option value={e}>{e}</option>));
                  return (
                    <MenuItem className="text-white" value={e}>
                      {e}
                    </MenuItem>
                  );
                })}
            </Select> */}
          </FormControl>
        </div>
        <div
          className="bg-stone-50 rounded-full h-[35px] w-[35px] pt-[5px] grid align-items-center justify-items-center mt-5"
          onClick={() => {
            // reverseHandler();
          }}
        >
          <CompareArrowsIcon />
        </div>
        <div className="grid align-items-center">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel
              style={{ color: "#BBE1FA" }}
              id="demo-simple-select-standard-label"
            >
              <LocationOnIcon /> TO
            </InputLabel>
            {end}
            {/* <Select
              className="px-[5px] w-[150px] rounded-md"
              name="gender"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="GENDER"
            >
              {stationData !== [] &&
                stationData.map((e) => {
                  // return(({startStation}===e)?(<option value={e} selected disabled>{e}</option>) :(<option value={e}>{e}</option>));
                  return <MenuItem value={e}>{e}</MenuItem>;
                })}
            </Select> */}
          </FormControl>
        </div>
        <div className="grid align-items-center">
          <label style={{ color: "#BBE1FA", fontSize: "14px" }} for="dob">
            Date of Departure{" "}
          </label>
          {/* <DatePicker id="dob" /> */}
          {date}
        </div>
        <div style={{ marginTop: "20px" }}>
          {/* <Button variant="contained">Search</Button> */}
        </div>
      </div>

      <div className="flex                                              ">
        <div className="flex-none w-64 "></div>

        <div className="flex-1 bg-[#1B262C]">
          { (trainData != []) && trainData.map((e)=>{return(<BookingCard id1={start} id2={end} date={date} name={e[1]} id={e[0]}/>)})}
        </div>
      </div>
    </div>
  );
};

export default Booking;
