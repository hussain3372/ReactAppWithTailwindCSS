import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Experts from "./components/Experts";
import NewsLatter from "./components/NewsLatter";
import Banner from "./components/Banner";
import Plans from "./components/Plans";

function App() {
  return (
    <div>
      <Header />
          <Banner />
          <Experts />
          <NewsLatter />
          <Plans />
          <Footer />  
    </div>
  );
}

export default App;
