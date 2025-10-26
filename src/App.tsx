import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import ContactForm from "./Pages/Contact/ContactForm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:postId" element={<Detail />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  );
}

export default App;
