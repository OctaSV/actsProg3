import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import {Route, Switch} from 'react-router-dom'
import Aboutus from "./components/screens/About/About";
import Home from "./components/screens/Home/Home";
import NotFound from "./components/screens/NotFound/NotFound";
import OneCharacter from "./components/screens/OneCharacter/OneCharacter";

import Characters from "./components/Characters/Characters";

function App() {
  

  return (
    <React.Fragment>
      <Navbar />
      <h1>My App in React</h1>
      <main>       
      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/aboutus' component={Aboutus}/>
        <Route path='/personajes' exact={true} component={Characters}/>
        <Route path='/personajes/id/:id' component={OneCharacter}/>
        <Route path='' component={NotFound}/>
      </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
