import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import Contact from "./Contact"
import Navbar from "./Navbar";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />}/>
                    <Route path="/about" element={<AboutUs />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="*" element={<Navigate to="/" />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;