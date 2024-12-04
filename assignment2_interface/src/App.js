import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Login from './component/Login';
import DoctorMainPage from './component/DoctorMainPage';
import NurseMainPage from './component/NurseMainPage';
import PatientMainPage from './component/PatientMainPage';
import ViewDoctor from './component/ViewDoctor';
import ViewMedicationPlan from './component/ViewMedicationPlan';
import HomePage from './component/HomePage';
import Contact from './component/Contact';
import AboutUs from './component/AboutUs'; 
import ModifyMedicationPlan from "./component/ModifyMedicationPlan";
import BookingAppointment from "./component/BookingAppointment";

function App() {
  // medications array
  const initialMedicationPlans = [
    { patientName: 'John Smith', medication: 'Aspirin', dosage: '100mg', notes: 'Take with food' },
    { patientName: 'Craig Johnson', medication: 'Ibuprofen', dosage: '200mg', notes: 'Take after meals' },
    { patientName: 'Amanda Briggs', medication: 'Paracetamol', dosage: '500mg', notes: 'As needed for pain' },
  ];

  const [medicationPlans, setMedicationPlans] = useState(initialMedicationPlans);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/general-login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/doctor" element={<DoctorMainPage />} />
        <Route path="/nurse" element={<NurseMainPage />} />
        <Route path="/patient" element={<PatientMainPage />} />
        <Route path="/view-doctor" element={<ViewDoctor />} />

        <Route 
          path="/medication-plan" 
          element={<ViewMedicationPlan medicationPlans={medicationPlans} />} 
        />

        <Route 
          path="/modify-medication" 
          element={<ModifyMedicationPlan medicationPlans={medicationPlans} setMedicationPlans={setMedicationPlans}/>} 
        />

        <Route path="/appointment" element={<BookingAppointment />} />
      </Routes>
    </div>
  );
}

export default App;
