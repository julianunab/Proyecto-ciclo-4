import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './components/Paginas/Inicio';
import Contacto from './components/Paginas/Contacto';
import Nosotros from './components/Paginas/Nosotros';
import Navbar from './components/Navegacion/Navbar';
import Carousel  from './components/Navegacion/Carousel';


function App() {
  return (
    <div class=".container-fluid">
    <Router>
      <Navbar/>
      <Carousel/>
     <Switch>
       <Route path="/contacto">
         <Contacto/>
       </Route>
       <Route path="/nosotros">
         <Nosotros/>
       </Route>
       <Route path="/">
         <Inicio/>
       </Route>
     </Switch>
    </Router>
    </div>
  );
}

export default App;
