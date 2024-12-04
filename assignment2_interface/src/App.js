import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './component/Navbar';
import Login from './component/Login';
import DoctorMainPage from './component/DoctorMainPage';
import NurseMainPage from './component/NurseMainPage';
import PatientMainPage from './component/PatientMainPage';
import PatientBookedPage from './component/PatientBookedPage';
import ViewDoctor from './component/ViewDoctor';
import ViewMedicationPlan from './component/ViewMedicationPlan';
import HomePage from './component/HomePage';
import Contact from './component/Contact';
import AboutUs from './component/AboutUs'; // Import AboutUs component
import Registration from './component/Registration';
import ModifyMedicationPlan from "./component/ModifyMedicationPlan";
import BookingAppointment from "./timeblock/BookingAppointment";
import DoctorTimeblock from "./timeblock/DoctorTimeBlock";
import NurseTimeBlock from "./timeblock/NurseTimeBlock";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/general-login" element={<Login />} />
        <Route path="/registration" element= {<Registration/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} /> {/* Route for About Us Page */}
        <Route path="/doctor" element={<DoctorMainPage />} />
        <Route path="/nurse" element={<NurseMainPage />} />
        <Route path="/patient" element={<PatientMainPage />} />
        <Route path="/patient-booked" element={<PatientBookedPage />} />
        <Route path="/view-doctor" element={<ViewDoctor />} />
        <Route path="/medication-plan" element={<ViewMedicationPlan />} />
        <Route path="/modify-medication" element={<ModifyMedicationPlan />} />
        <Route path="/appointment" element={<BookingAppointment />} />
        <Route path="/doctor-timeblock" element={<DoctorTimeblock />} />
        <Route path="/nurse-timeblock" element={<NurseTimeBlock />} />
      </Routes>
    </div>
  );
}

export default App;
