import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
            <Switch>
              <Route exact path="/" component={Work} />
              <Route exact path="/work" component={Work} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route path="*" component={Work} />
            </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
