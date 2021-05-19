import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/styles.css";

function App() {
  return (
    
    <Router>
      <div className="wrapper">
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
        <Footer />
      </div>
      </Router>

  );
}

export default App;
