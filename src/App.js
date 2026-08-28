import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Footer from "./Pages/Home/Footer";
import Home from "./Pages/Home/Homescreen";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService";
import NotFound from "./Pages/NotFound";
import ScrollToTop from "./Components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <div className="app--layout-container">
          <Navbar />
          <main className="main--content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      <Analytics />
    </div>
  );
}

export default App;