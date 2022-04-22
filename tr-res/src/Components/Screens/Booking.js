import React from "react";
import "./Booking.css";

const Booking = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "green",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                }}
            ></div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Booking;
