import './Homepage.css';
import Navbar from "./Navbar";
// import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div className="background" >
      <Navbar/>
      <div>
        <h1>SPCS</h1>
        <p>Where family comes first</p>
      </div>
      <div>A Clinic that treats you like family</div>
      <button>Book a Doctor</button>
      <button>Call Us</button>
    </div>
  );
}

export default Home;
