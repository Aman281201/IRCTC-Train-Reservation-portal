import "./App.css";
import React, { useEffect, createContext, useReducer, useContext } from "react";
import { reducer, initialState } from "./Reducer/reducer";
import Home from "./Components/Screens/Home";
import Booking from "./Components/Screens/Booking";
import Login from "./Components/Screens/Login";
import Signup from "./Components/Screens/Register";
import AddRoute from './Components/Screens/Route';

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Passenger from "./Components/Screens/Passenger";

import Train from "./Components/Screens/Train";
import AdminLogin from "./Components/Screens/AdminLogin";
import BookingCard from "./Components/booking/BookingCard";
import Register from "./Components/Screens/Register";



export const UserContext = createContext();

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
      navigate("/");
    } else {
      navigate("/login");
    }
  }, {});

  return (
    <div className="App">
      <Routes>

        {/* <Route exact path="/login">{<Login />}</Route> */}
        <Route exact path="/Admin" element={<AdminLogin />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/login" element={<Register />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/train" element={<Train />} />


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

        {/* <Footer /> */}
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
