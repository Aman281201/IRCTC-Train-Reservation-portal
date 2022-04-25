import "./App.css";
import Home from "./Components/Screens/Home";
import Booking from "./Components/Screens/Booking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Booking from "./Components/Screens/Booking";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* <Route exact path="/login">{<Login />}</Route> */}
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/booking" element={<Booking />} />
                </Routes>
            </div>
        </Router>
    );
}
/* <div className="App">
            <Home />
            {/* <Booking /> 
            </div> */
export default App;
