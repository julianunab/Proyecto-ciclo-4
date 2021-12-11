import React, { useState } from 'react'

const Registro = () => {
 
  const [datos, setDatos] = useState({
    nombre: '',
    razon: '',
    contraseña: '',
    nit: '',
    mercadoObjetivo: '',
    representantelegal: '',
    tipo:'',
    sector:'',
    telefono:'',
    municipio:'',
    direccion:'',
    departamento:'',
    categoria:'',


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
    console.log(datos.nombre + ' ' + datos.razon + datos.contraseña)
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
                <input type="text" type="password" name="contraseña" className="form-control" placeholder="Contraseña" aria-label="Contraseña" onChange={handleInputChange}/>
              </div>
              <div className="col-sm">
                <input type="text" name="nit" className="form-control" placeholder="Nit" aria-label="Nit" onChange={handleInputChange}/>
              </div>
              <div className="col-sm">
                <input type="text" name="mercadoObjetivo" className="form-control" placeholder="Mercado objetivo" aria-label="Mercado objetivo" onChange={handleInputChange}/>
              </div>
            </div>
            <div className="row g-3 p-3">
              <div className="col-sm">
                <input type="text" name="representantelegal" className="form-control" placeholder="Representante legal" aria-label="Representante legal" onChange={handleInputChange}/>
              </div>
              <div className="col-sm">
                <input type="text" name="tipo" className="form-control" placeholder="Tipo de empresa" aria-label="Tipo de empresa" onChange={handleInputChange}/>
              </div>
              <div className="col-sm">
                <input type="text" name="sector" className="form-control" placeholder="Sector empresarial" aria-label="Sector empresarial" onChange={handleInputChange}/>
              </div>
            </div>
            <div className="row g-3 p-3">
              <div className="col-sm">
                <input type="text" name="telefono" className="form-control" placeholder="Telefono" aria-label="Telefono" onChange={handleInputChange}/>
              </div>
              <div className="col-sm">
                <input type="text" name="departamento" className="form-control" placeholder="Departamento" aria-label="Departamento" onChange={handleInputChange}/>
              </div>
              <div className="col-sm">
                <select className="form-select" name="categoria" aria-label="Categoria" onChange={handleInputChange}>
                <option selected>Categoria</option>
                <option>Montajes electricos</option>
                <option>Laboratorios y analisis tecnicos</option>
                <option>Servicios de consultoria</option>
                <option>Servicios ambientales</option>
                <option>Montajes metalmecanicos</option>
                <option>Obras civiles</option>
                <option>Catering</option>
                <option>Suministros</option>
                <option>Servicios de salud</option>
                <option>Otros transportes</option>
                <option>Servicios TIC</option>
                <option>Servicios generales y mantenimiento</option>
                <option>Energia eolica</option>
                <option>Energia Solar</option>
                </select>
              </div>
            </div>
            <div className="row g-3 p-3">
              <div className="col-sm">
                <input type="text" name="direccion" className="form-control" placeholder="Direccion" aria-label="Direccion" onChange={handleInputChange}/>
              </div>
              <div className="col-sm">
                <input type="text" name="municipio" className="form-control" placeholder="Municipio" aria-label="Municipio" onChange={handleInputChange}/>
              </div>
              <div className="col-sm">
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault">Estoy de acuerdo con los terminos y condiciones</label>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-success" type="submit">Guardar</button>
        </div>
        </form>
        </div>
        
        
      </div>
    </div>
  )
}

export default Registro
