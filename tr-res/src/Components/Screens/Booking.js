import React, { useState, useEffect } from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import "./Booking.css";
import Button from "@mui/material/Button";

const Booking = ({ props }) => {
    const [stationData, setStationData] = useState(["delhi", "mumbai", "pune"]);
    // const [startStation, setStartStation] = useState(props.start);
    // const [endStation, setEndStation] = useState(props.end);

    // const reverseHandler = (startStation) => {
    //     const s = { startStation };
    //     setStartStation(endStation);
    //     setEndStation(s);
    // };

    // useEffect(() => {
    //     fetch("/station", {
    //       headers: {
    //         // Authorization: "Bearer" + localStorage.getItem("jwt"),
    //       },
    //     })
    //       .then((res) => res.json())
    //       .then((result) => {

    //         setStationData(result.posts);

    //       });
    //   }, []);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "#0F4C75",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    justifyContent: "space-around",
                }}
            >
                <div className="grid align-items-center">
                    <select className="px-[5px] w-[150px] rounded-md">
                        {stationData !== [] &&
                            stationData.map((e) => {
                                // return(({startStation}===e)?(<option value={e} selected disabled>{e}</option>) :(<option value={e}>{e}</option>));
                                return <option value={e}>{e}</option>;
                            })}
                    </select>
                </div>
                <div
                    className="bg-stone-50 rounded-full h-[35px] w-[35px] pt-[5px] grid align-items-center justify-items-center"
                    onClick={() => {
                        // reverseHandler();
                    }}
                >
                    <CompareArrowsIcon />
                </div>
                <div className="grid align-items-center">
                    <select className="px-[5px] w-[150px] rounded-md bg-stone-50">
                        {stationData !== [] &&
                            stationData.map((e) => {
                                // return(({endStation}===e)?(<option value={e} selected disabled>{e}</option>) :(<option value={e}>{e}</option>));
                                return <option value={e}>{e}</option>;
                            })}
                    </select>
                </div>
                <div className="grid align-items-center">
                    <input
                        className="px-[5px] rounded-md w-[150px]"
                        placeholder="date time picker"
                    />
                </div>
                <div>
                    <Button variant="contained">Search</Button>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
                <div> abcd</div>
                <div></div>
            </div>
        </div>
    );
};

export default Booking;
