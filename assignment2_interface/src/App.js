import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import Contact from "./Contact"
import Login from "./Login";
import StaffLogin from "./StaffLogin";
import PatientHome from "./PatientHome";
import DoctorHome from "./DoctorHome";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />}/>
                    <Route path="/about" element={<AboutUs />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/stafflogin" element={<StaffLogin />}/>
                    <Route path="/patienthome" element={<PatientHome />}/>
                    <Route path="/doctorhome" element={<DoctorHome />}/>
                    <Route path="*" element={<Navigate to="/" />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;