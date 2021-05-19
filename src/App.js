import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Work from "./components/pages/Work";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <div>
          <Header />
          <Route exact path="/" component={Work} />
          <Route exact path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
        <Footer />
      </Router>
  );
}

export default App;
