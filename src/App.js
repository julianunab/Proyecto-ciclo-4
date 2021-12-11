import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './components/Paginas/Inicio';
import Navbar from './components/Navegacion/Navbar';
import Carousel from './components/Navegacion/Carousel';
import Directorio from "./components/Paginas/Directorio";
import Registro from "./components/Paginas/Registro";
import Footer from "./components/Navegacion/Footer";
import Noticias from "./components/Paginas/Noticias";
import Post from "./components/Paginas/Post";

function App() {
  return (
    <div class=".container-fluid">
      <Router>
        <Navbar />
        <Carousel />
        <Switch>
          <Route path="/Directorio">
            <Directorio />
          </Route>
          <Route path="/Noticias">
            <Noticias />
          </Route>
          <Route path="/Post">
            <Post />
          </Route>
          <Route path="/Registro">
            <Registro />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
