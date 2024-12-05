import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';

import Navbar from './component/Navbar';
import NavbarUser from './component/NavbarUser';
import Login from './component/Login';
import DoctorMainPage from './component/DoctorMainPage';
import NurseMainPage from './component/NurseMainPage';
import PatientMainPage from './component/PatientMainPage';
import PatientBookedPage from './component/PatientBookedPage';
import ViewDoctor from './component/ViewDoctor';
import ViewMedicationPlan from './component/ViewMedicationPlan';
import HomePage from './component/HomePage';
import Contact from './component/Contact';
import ModifyMedicationPlan from "./component/ModifyMedicationPlan";
import AboutUs from './component/AboutUs'; // Import AboutUs component
import Registration from './component/Registration';
import BookingAppointment from "./timeblock/BookingAppointment";
import DoctorTimeblock from "./timeblock/DoctorTimeBlock";
import NurseTimeBlock from "./timeblock/NurseTimeBlock";
import ViewMedicationNurse from "./component/ViewMedicationNurse";
import BookingForum from "./timeblock/BookingForum";


function App() {
  // medications array
  const initialMedicationPlans = [
    { patientName: 'John Smith', medication: 'Aspirin', dosage: '100mg', notes: 'Take with food' },
    { patientName: 'Craig Johnson', medication: 'Ibuprofen', dosage: '200mg', notes: 'Take after meals' },
    { patientName: 'Amanda Briggs', medication: 'Paracetamol', dosage: '500mg', notes: 'As needed for pain' },
  ];

  const [medicationPlans, setMedicationPlans] = useState(initialMedicationPlans);

  const location = useLocation();
  const userNavbar = [
    '/doctor', 
    '/nurse', 
    '/patient', 
    '/patient-booked', 
    '/view-doctor',
    '/medication-plan', 
    '/modify-medication',
    '/medication-plan-nurse', 
    '/appointment'];
    const hideNavbar = [
      '/general-login',
      '/registration',
      '/appointment',
      '/doctor-timeblock',
      '/nurse-timeblock',
      '/appointment-forum'
    ];
  const showUserNavbar = userNavbar.includes(location.pathname);

  const showNavbar = hideNavbar.includes(location.pathname)

  return (
    <div className="App">
      {showNavbar ? "" : (showUserNavbar ? <NavbarUser />: <Navbar/>)}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/general-login" element={<Login />} />
        <Route path="/registration" element= {<Registration/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/doctor" element={<DoctorMainPage />} />
        <Route path="/nurse" element={<NurseMainPage />} />
        <Route path="/patient" element={<PatientMainPage />} />
        <Route path="/patient-booked" element={<PatientBookedPage />} />
        <Route path="/view-doctor" element={<ViewDoctor />} />
        <Route 
          path="/medication-plan" 
          element={<ViewMedicationPlan medicationPlans={medicationPlans} />} 
        />
        <Route 
          path="/modify-medication" 
          element={<ModifyMedicationPlan medicationPlans={medicationPlans} setMedicationPlans={setMedicationPlans}/>} 
        />
        <Route 
          path="/medication-plan-nurse" 
          element={<ViewMedicationNurse medicationPlans={medicationPlans} setMedicationPlans={setMedicationPlans}/>} 
        />
        <Route path="/appointment" element={<BookingAppointment />} />
        <Route path="/appointment-forum" element={<BookingForum />} />
        <Route path="/doctor-timeblock" element={<DoctorTimeblock />} />
        <Route path="/nurse-timeblock" element={<NurseTimeBlock />} />
      </Routes>
    </div>
  );
}

export default App;
