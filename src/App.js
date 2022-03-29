import "./App.css";

import Home from "./components/Home";

import Tokenomics from "./components/Tokenomics";
import { Routes, Route, Switch } from "react-router-dom";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tokenomics" component={Tokenomics} />
        <Route exact path="/roadmap" component={Roadmap} />
        <Route exact path="/about" component={About} />
      </Switch>



    </>
  );
}

export default App;
