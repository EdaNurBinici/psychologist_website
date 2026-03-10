import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./styles/main.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProcessPage from "./pages/ProcessPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import AppointmentPage from "./pages/AppointmentPage";
import OtherPage from "./pages/OtherPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkinda" element={<AboutPage />} />
          <Route path="/hizmetler" element={<ServicesPage />} />
          <Route path="/surec" element={<ProcessPage />} />
          <Route path="/yorumlar" element={<TestimonialsPage />} />
          <Route path="/sss" element={<FAQPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/randevu" element={<AppointmentPage />} />
          <Route path="/vesaire" element={<OtherPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </Router>
  );
}
