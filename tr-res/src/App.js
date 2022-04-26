import "./App.css";
import Home from "./Components/Screens/Home";
import Booking from "./Components/Screens/Booking";
import Login from "./Components/Screens/Login";
import Signup from "./Components/Screens/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Booking from "./Components/Screens/Booking";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* <Route exact path="/login">{<Login />}</Route> */}
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/booking" element={<Booking />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
