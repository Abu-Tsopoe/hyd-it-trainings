import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import Header from "./HIT/Header";
import Routing from "./HIT/Routing";
import Footer from "./HIT/Footer";




function App() {
  return (
    <div>
      <Header/>
      <Routing/>
      <Footer/>
    </div>
  );
}

export default App;
