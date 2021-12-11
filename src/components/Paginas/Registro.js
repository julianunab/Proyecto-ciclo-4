import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Registro = () => {
  const history = useHistory();

  const [data, setData] = useState({
    id: "",
    nombreRepresentante: "",
    tipoDoc: "",
    doc: "",
    tipoEmpresa: "",
    nit: "",
    email: "",
    razonSocial: "",
    telefono: "",
    categorias: null,
    target: "",
    sector: "",
    direccion: "",
    departamento: "",
    municipio: "",
    fRegistro: new Date().toISOString()
  })

  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value
    })
  }

  const URL = "http://localhost:8080/empresa";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(URL, data, { mode: 'cors' });

    if (response.status === 200) {
      Swal.fire(
        "Guardado!",
        `La empresa con id: ${response.data.id} ha sido guardado!`,
        "success"
      )
      history.push("/empresa")
    } else {
      console.log(response.status, response)
      Swal.fire(
        "Error",
        "Problemas al crear el registro",
        "error"
      )
    }
  }
  return (
    <div>
      <div className="container-sm">
        <div className="alert alert-light text-light fw-bold fs-3 p-2" role="alert">
          Registro de empresas
        </div>
        <Form onSubmit={handleSubmit}>
          <div class="card border-success mb-3">
            <div class="card-body text-success">
              <div class="row g-3 p-3">
                <div class="col">
                  <Form.Group>
                    <Form.Control
                      type="number"
                      name="id"
                      placeholder="Id"
                      required
                      value={data.id}
                      onChange={handleChange}
                    >
                    </Form.Control>
                  </Form.Group>
                </div>
                <div class="col">
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="razonSocial"
                      placeholder="Razon Social"
                      required
                      value={data.razonSocial}
                      onChange={handleChange}
                    >
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div class="row g-3 p-3">
                <div class="col-sm">
                  <Form.Group>
                    <label></label>
                    <Form.Control
                      type="text"
                      name="nombreRepresentante"
                      placeholder="Nombre Representante"
                      required
                      value={data.nombreRepresentante}
                      onChange={handleChange}
                    >
                    </Form.Control>
                  </Form.Group>
                </div>
                <div class="col-sm">
                  <Form.Group>
                    <label><strong>Tipo Documento</strong></label>
                    <Form.Select  value={data.tipoDoc} onChange={handleChange} aria-label="Default select example">
                    <option value="CEDULA">Cedula</option>
                      <option value="CEDULA EXTRANJERA">Cedula Extranjera</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div class="col-sm">
                  <Form.Group>
                    <label></label>
                    <Form.Control
                      type="text"
                      name="doc"
                      placeholder="Numero documento"
                      required
                      value={data.doc}
                      onChange={handleChange}
                    >
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div class="row g-3 p-3">
                <div class="col-sm">
                  <Form.Group>
                    <label><strong>Tipo Empresa</strong></label>
                    <select value={data.tipoEmpresa} class="form-select" aria-label="Tipo Empresa" onChange={handleChange}>
                      <option value="PRIVADA">Privada</option>
                      <option value="PUBLICA">Publica</option>
                      <option value="MIXTA">Mixta</option>
                    </select>
                  </Form.Group>
                </div>
                <div class="col-sm">
                  <Form.Group>
                    <label></label>
                    <Form.Control
                      type="text"
                      name="nit"
                      placeholder="NIT"
                      required
                      value={data.nit}
                      onChange={handleChange}
                    >
                    </Form.Control>
                  </Form.Group>
                </div>
                <div class="col-sm">
                  <Form.Group>
                    <label></label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Email"
                      required
                      value={data.email}
                      onChange={handleChange}
                    >
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div class="row g-3 p-3">
                <div class="col-sm">
                  <Form.Group>
                    <label></label>
                    <Form.Control
                      type="text"
                      name="telefono"
                      placeholder="Telefono"
                      required
                      value={data.telefono}
                      onChange={handleChange}
                    >
                    </Form.Control>
                  </Form.Group>
                </div>
                <div class="col-sm">
                  <Form.Group>
                    <label></label>
                    <Form.Control
                      type="text"
                      name="target"
                      placeholder="Target"
                      required
                      value={data.target}
                      onChange={handleChange}
                    >
                    </Form.Control>
                  </Form.Group>
                </div>
                <div class="col-sm">
                  <Form.Group>
                    <label><strong>Categoria</strong></label>
                    <select value={data.categorias} class="form-select" aria-label="Categoria" onChange={handleChange}>
                      <option value="TRANSPORTE DE CARGA">Transporte de carga</option>
                      <option value="MONTAJES ELECTRICOS">Montajes electricos</option>
                      <option value="LABORATORIOS Y ANALISIS TECNICOS">Laboratorios y analisis tecnicos</option>
                      <option value="SERVICIOS DE CONSULTORIA">Servicios de consultoria</option>
                      <option value="SERVICIOS AMBIENTALES">Servicios ambientales</option>
                      <option value="MONTAJES METALMECANICOS">Montajes metalmecanicos</option>
                      <option value="OBRAS CIVILES">Obras civiles</option>
                      <option value="CATERING">Catering</option>
                      <option value="SUMINISTROS">Suministros</option>
                      <option value="SERVICIOS DE SALUD">Servicios de salud</option>
                      <option value="OTROS TRANSPORTES">Otros transportes</option>
                      <option value="SERVICIOS TIC">Servicios TIC</option>
                      <option value="SERVICIOS GENERALES Y MANTENIMIENTO">Servicios generales y mantenimiento</option>
                      <option value="ENERGIA EOLICA">Energia eolica</option>
                      <option value="ENERGIA SOLAR">Energia Solar</option>
                    </select>
                  </Form.Group>
                </div>
              </div>
              <div class="row g-3 p-3">
                <div class="col-sm">
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="sector"
                      placeholder="Sector"
                      required
                      value={data.sector}
                      onChange={handleChange}
                    >
                    </Form.Control>
                  </Form.Group>
                </div>
                <div class="col-sm">
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="direccion"
                      placeholder="Direccion"
                      required
                      value={data.direccion}
                      onChange={handleChange}
                    >
                    </Form.Control>
                  </Form.Group>
                </div>
                <div class="col-sm">
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="departamento"
                      placeholder="Departamento"
                      required
                      value={data.departamento}
                      onChange={handleChange}
                    >
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div class="row g-2 p-3">
                <div class="col-sm">
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="municipio"
                      placeholder="Municipio"
                      required
                      value={data.municipio}
                      onChange={handleChange}
                    >
                    </Form.Control>
                  </Form.Group>
                </div>
                <div class="col-sm">
                  <Form.Group>
                    <Form.Control
                      type="date"
                      name="fRegistro"
                      placeholder="Fecha de Registro"
                      required
                      value={data.fRegistro}
                      onChange={handleChange}
                    >
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-success" type="submit">Guardar</button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Registro
