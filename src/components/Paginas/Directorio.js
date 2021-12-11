import React, {useEffect , useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
const Directorio = () => {
  const baseURL="http://localhost:8080/empresa"
  const [data , setData] = useState([])

  const peticionGet = async () => {
          await axios.get(baseURL,{ mode: 'cors'})
          .then(response=>{
            setData(response.data);
          }).catch(error=>{
            console.log(error)
          })}
         useEffect(() =>{
      peticionGet();
      },[setData]);

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
        <div class="card border-success mb-3">
          <div class="card-body text-success">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Razon Social</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((empresa) => (
                    <tr key={empresa.id}>
                      <td>{empresa.id}</td>
                      <td>{empresa.razonSocial}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Directorio
