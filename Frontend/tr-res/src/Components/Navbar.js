import React, { useEffect, createContext, useReducer, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../App";

const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Center = styled.div`
  flex: 1;
`;
const AppName = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: bolder;
  text-align: center;
`;
const Items = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 30px;
`;
const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const renderlist = () => {
    if (state) {
      return [
        <ul>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button
              className="btn waves-effect waves-light #ec407a pink lighten-1 "
              onClick={() => {
                localStorage.clear();
                dispatch({ type: "Logout" });
                navigate("/signin");
              }}
            >
              Logout
            </button>
          </li>
        </ul>,
      ];
    } else {
      return [
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/Admin">Admin Login</Link>
          </li>
        </ul>,
      ];
    }
  };

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper #ff8a80 red accent-1">
          <Link to={state ? "/" : "signin"} className="brand-logo left">
            Train Reservation
          </Link>
          <ul id="nav-mobile" className="right ">
            {renderlist()}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
