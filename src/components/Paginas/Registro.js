import React from 'react'
const Registro = () => {
    return (
      <div>
        <div class="container-sm">
<div class="alert alert-light text-light fw-bold fs-3 p-2" role="alert">
  Registro de empresas
</div>
<div class="card border-success mb-3">
    <div class="card-body text-success">
      <div class="row g-3 p-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="Correo o usuario" aria-label="Correo o usuario"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Razón social" aria-label="Razón social"/>
  </div>
</div>
      <div class="row g-3 p-3">
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Contraseña" aria-label="Contraseña"/>
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Nit" aria-label="Nit"/>
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Mercado objetivo" aria-label="Mercado objetivo"/>
  </div>
</div>
<div class="row g-3 p-3">
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Representante legal" aria-label="Representante legal"/>
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Tipo de empresa" aria-label="Tipo de empresa"/>
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Sector empresarial" aria-label="Sector empresarial"/>
  </div>
</div>
<div class="row g-3 p-3">
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Telefono" aria-label="Telefono"/>
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Departamento" aria-label="Departamento"/>
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Categoria" aria-label="Categoria"/>
  </div>
</div>
<div class="row g-3 p-3">
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Direccion" aria-label="Direccion"/>
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Municipio" aria-label="Municipio"/>
  </div>
  <div class="col-sm">
  <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Estoy de acuerdo con los terminos y condiciones</label>
  </div>
  </div>
</div>
  </div> 
</div>
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-success" type="button">Guardar</button>
</div>
</div>
      </div>    
    )
}

export default Registro
