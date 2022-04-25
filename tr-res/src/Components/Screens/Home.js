import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Booking from "./Booking";
import "./Home.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { DateRangeTwoTone } from "@mui/icons-material";

const Home = () => {
    // useEffect(() => {
    //     fetch("/station", {
    //         headers: {
    //             // Authorization: "Bearer" + localStorage.getItem("")
    //         }
    //     })
    //     .then(res => res.json()).then((result) => {

    //     })

    // }, []);
    const [stationData, setStationData] = useState([]);
    const [pickup, changePickup] = useState("");
    const [destination, changeDestination] = useState("");
    const [date, changeDate] = useState(new Date());

    console.log(pickup);
    console.log(destination);
    console.log(date);

    return (
        <div className="container">
            <div className="frm">
                <form>
                    <label>
                        pickup:
                        <input
                            className="take-input"
                            type="text"
                            value={pickup}
                            onChange={(e) => changePickup(e.target.value)}
                        />
                    </label>
                    <br />
                    <br />
                    <label>
                        destination:
                        <input
                            className="take-input"
                            type="text"
                            value={destination}
                            onChange={(e) => changeDestination(e.target.value)}
                        />
                    </label>
                    <br />
                    <br />
                    <label>
                        date of departure:
                        <DatePicker
                            selected={date}
                            onChange={(date) => changeDate(date)}
                        />
                        {/* <input type="submit" value="submit"></input> */}
                        <Link to="/booking">
                            <button
                                type="submit"
                                // onClick={() => {
                                //     buttonHandler();
                                // }}
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
                <img
                    className="image"
                    src="data:image/jpeg;base64,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"
                    alt=""
                />
            </div>
        </div>
    );
};


export default Home;
