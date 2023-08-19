import "./App.css";
import React, { useEffect, createContext, useReducer, useContext } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { reducer, initialState } from "./Reducer/reducer";

import Home from "./Components/Screens/Home";
import Booking from "./Components/Screens/Booking";
import Login from "./Components/Screens/Login";
import Signup from "./Components/Screens/Register";
import AddRoute from "./Components/Screens/Route";
import AdminHome from "./Components/Screens/AdminHome";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import Account from "./Components/Screens/Account";
import Passenger from "./Components/Screens/Passenger";
import Train from "./Components/Screens/Train";
import AdminLogin from "./Components/Screens/AdminLogin";
import BookingCard from "./Components/booking/bookingCard";
import Register from "./Components/Screens/Register";
import Profile from "./Components/Screens/Profile";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Login from "./Components/Screens/Login"

export const UserContext = createContext();

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
      navigate("/Admin");
    } else {
      navigate("/login");
    }
  }, {});

  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/login">{<Login />}</Route> */}
        <Route exact path="/Admin" element={<AdminLogin />} />
        <Route exact path="/AdminHome" element={<AdminHome />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/booking/:start/:end/:date" element={<Booking />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/train" element={<Train />} />
        <Route exact path="/passengers" element={<Passenger />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/Addroute" element={<AddRoute />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

// =======
//     return (
// //         <Router>
//             <div className="App">
//                 <Routes>
//                     {<Route exact path="/login">{<Login />}</Route>}
//                     <Route exact path="/" element={<Home />} />
//                     <Route exact path="/booking" element={<Booking />} />
//                     <Route exact path="/login" element={<Login />} />
//                     <Route exact path="/signup" element={<Signup />} />

//                 </Routes>
//             </div>
// //         </Router>
//     );
// >>>>>>> master

export default App;
