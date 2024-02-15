import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";
import Aboutus from "./components/BAboutus";
import Butwhy from "./components/CButWhy";
import Ourbuds from "./components/EourBuds";
import Package from "./components/Fpackage";
import Safety from "./components/safety";
import Touchin from "./components/reach";
import Contact from "./components/contact";
import HomePage from "./components/Ahome";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/aboutUs" element={<Aboutus />} />
          <Route exact path="/butWhy" element={<Butwhy />} />
          <Route exact path="/ourBuds" element={<Ourbuds />} />
          <Route exact path="/packagePricing" element={<Package />} />
          <Route exact path="/safetyPrivacy" element={<Safety />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route exact path="/touchIn" element={<Touchin />} />
          <Route exact path="/contactUs" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
