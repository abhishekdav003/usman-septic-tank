import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import TankSelectionGuide from "./pages/TankSelectionGuide";
import { useLenis } from "./hooks/useLenis";
import "lenis/dist/lenis.css";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

function App() {
  useLenis();

  // ✅ HashRouter ke liye redirect logic
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath !== '/usman-septic-tank/' && !currentPath.includes('#')) {
      const newPath = currentPath.replace('/usman-septic-tank', '');
      window.history.replaceState(null, '', '/usman-septic-tank/#' + newPath);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/tank-selection-guide"
              element={<TankSelectionGuide />}
            />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;