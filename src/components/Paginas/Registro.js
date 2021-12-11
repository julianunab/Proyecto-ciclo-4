import React, { useState } from 'react'

const Registro = () => {
 
  const [datos, setDatos] = useState({
    nombre: '',
    razon: '',
  })

  const handleInputChange = (event) => {
    //console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.nombre + ' ' + datos.razon)
  }

  return (
    <div>
      <div className="container-sm">
        <div className="alert alert-light text-light fw-bold fs-3 p-2" role="alert">
          Registro de empresas
        </div>

        <div className="card border-success mb-3">
          <form onSubmit={enviarDatos}>
          <div className="card-body text-success">
            <div className="row g-3 p-3">
              <div className="col">
                <input type="text" name="nombre" className="form-control" placeholder="Correo o usuario" aria-label="Correo o usuario" onChange={handleInputChange}/>
      
              </div>
              <div className="col">
                <input type="text" name="razon" className="form-control" placeholder="Razón social" aria-label="Razón social" onChange={handleInputChange}/>
              </div>
            </div>
            <div className="row g-3 p-3">
              <div className="col-sm">
                <input type="text" className="form-control" placeholder="Contraseña" aria-label="Contraseña" />
              </div>
              <div className="col-sm">
                <input type="text" className="form-control" placeholder="Nit" aria-label="Nit" />
              </div>
              <div className="col-sm">
                <input type="text" className="form-control" placeholder="Mercado objetivo" aria-label="Mercado objetivo" />
              </div>
            </div>
            <div className="row g-3 p-3">
              <div className="col-sm">
                <input type="text" className="form-control" placeholder="Representante legal" aria-label="Representante legal" />
              </div>
              <div className="col-sm">
                <input type="text" className="form-control" placeholder="Tipo de empresa" aria-label="Tipo de empresa" />
              </div>
              <div className="col-sm">
                <input type="text" className="form-control" placeholder="Sector empresarial" aria-label="Sector empresarial" />
              </div>
            </div>
            <div className="row g-3 p-3">
              <div className="col-sm">
                <input type="text" className="form-control" placeholder="Telefono" aria-label="Telefono" />
              </div>
              <div className="col-sm">
                <input type="text" className="form-control" placeholder="Departamento" aria-label="Departamento" />
              </div>
              <div className="col-sm">
                <select className="form-select" aria-label="Categoria">
                <option selected>Categoria</option>
                <option value="1">Transporte de carga</option>
                <option value="2">Montajes electricos</option>
                <option value="3">Laboratorios y analisis tecnicos</option>
                <option value="4">Servicios de consultoria</option>
                <option value="5">Servicios ambientales</option>
                <option value="6">Montajes metalmecanicos</option>
                <option value="7">Obras civiles</option>
                <option value="8">Catering</option>
                <option value="9">Suministros</option>
                <option value="10">Servicios de salud</option>
                <option value="11">Otros transportes</option>
                <option value="12">Servicios TIC</option>
                <option value="13">Servicios generales y mantenimiento</option>
                <option value="14">Energia eolica</option>
                <option value="15">Energia Solar</option>
                </select>
              </div>
            </div>
            <div className="row g-3 p-3">
              <div className="col-sm">
                <input type="text" className="form-control" placeholder="Direccion" aria-label="Direccion" />
              </div>
              <div className="col-sm">
                <input type="text" className="form-control" placeholder="Municipio" aria-label="Municipio" />
              </div>
              <div className="col-sm">
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault">Estoy de acuerdo con los terminos y condiciones</label>
                </div>
              </div>
            </div>
          </div>
          </form>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-success" type="submit">Guardar</button>
        </div>
      </div>
    </div>
  )
}

export default Registro
