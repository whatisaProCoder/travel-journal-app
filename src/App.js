import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card {...item} />;
  });

  return (
    <div>
      
      {cards}
      <Footer />
    </div>
  );
}

export default App;
