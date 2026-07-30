import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* Client decision (final): Industries, Careers, Contact stay as homepage
            scroll-sections (#industries, #careers, #contact) — no dedicated routes. */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}