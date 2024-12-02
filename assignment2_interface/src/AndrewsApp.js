import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import BookingAppointment from "./components/BookingAppointment/BookingAppointment";
import DoctorTimeblock from "./components/DoctorTimeblock/DoctorTimeblock";
import "./styles/App.css";

// Header component that updates based on the route
const Header = () => {
  const location = useLocation(); // Hook to get the current route
  const getTitle = () => {
    switch (location.pathname) {
      case "/patient-booking":
        return "Patient Appointment Scheduler";
      case "/doctor-timeblock":
        return "Doctor Appointment Viewer";
      default:
        return "Appointment Scheduler";
    }
  };

  return (
    <header className="App-header">
      <h1>{getTitle()}</h1>
    </header>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/patient-booking" element={<BookingAppointment />} />
            <Route path="/doctor-timeblock" element={<DoctorTimeblock />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
