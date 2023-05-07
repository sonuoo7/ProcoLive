import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Footer from "./Components/Footer/Footer"
import Blog from "./Components/Blog/Blog"
import ResumeWriting from "./Components/ResumeWritingPage/ResumeWriting"
import NewsLetter from "./Components/Newsletter/NewsLetter"
import WhatsApp from "./Components/Whatsapp/WhatsApp"
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/resume" element={<ResumeWriting />}></Route>
      </Routes>
      <NewsLetter />
      <Footer />
      <WhatsApp />
    </Router>
  );
};

export default App;
