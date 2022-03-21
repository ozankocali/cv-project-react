import logo from "./logo.svg";
import "./App.css";
import TopbarComponent from "./components/topbar/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactComponent from "./components/contactComponent/ContactComponent";
import AboutMeComponent from "./components/aboutMeComponent/AboutMeComponent";
import HomePageComponent from "./components/homePageComponent/HomePageComponent";
import ReactDOM from "react-dom";
import FooterComponent from "./components/footerComponent/FooterComponent";

function App() {
  return (
    <div>
      <TopbarComponent></TopbarComponent>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePageComponent />} />
          <Route exact path="about" element={<AboutMeComponent />} />
          <Route exact path="contact" element={<ContactComponent />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
