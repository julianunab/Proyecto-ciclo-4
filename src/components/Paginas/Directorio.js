import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
const Directorio = () => {
  return (
    <div>
      <div class="container-sm">
        <div class="alert alert-light text-light fw-bold fs-3 p-2" role="alert">
          Directorio empresarial
        </div>
        <div class="card border-success mb-3">
          <div class="card-body text-success">
            <p class="card-text"> Este directorio brinda información sobre las empresas clasificadas por gremios, que ofrecen bienes y servicios en Villavicencio y los demás municipios del departamento del meta para la industria de energías renovables, alternativas e hidrocarburos. </p>
          </div>
        </div>
        <div class="card border-success mb-3">
          <div class="card-body text-success">
            <div class="row g-3">
              <div class="col-sm">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Municipio</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-sm">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Sector</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-sm">
                <button type="button" class="btn btn-success">Buscar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Directorio
