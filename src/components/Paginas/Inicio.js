import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
const inicio = () => {
    return (
        <div>
            <div Class="container-sm">
                <div Class="card border-success mb-3">
                    <div Class="card-body text-success">
                        <h5 Class="card-title text-center fw-bold">INICIATIVA CLUSTER DE ENERGIAS RENOVABLES, OIL & GAS</h5>
                        <p Class="card-text"> La iniciativa cluster de energías renovables, Oil & Gas es una visión propuesta por la secretaria de competitividad y desarrollo de Villavicencio, en alianza estratégica de otras instituciones que buscan mejorar la competitividad y el acceso a mercados de empresas de servicios, industriales y comerciales de nuestro municipio y región, enmarcadas en la industria energética. </p>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-3">
                            <img src="\img\banner01.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">¿Qué es un Clúster?</h5>
                                <p class="card-text">La cercanía de las empresas genera competencia, un factor clave para la innovación, al tiempo facilita acceso a insumos y conocimientos específicos obteniendo un mejor desempeño económico, convirtiéndose en más productos competitivos, tales esfuerzos se conocen como iniciativas clúster en las que se busca desarrollar agendas de ciencia, tecnología e innovación, solucionando necesidades de capital humano, resolver problemas de infraestructura específica y establecer estándares y normativas clúster entre otros objetivos, esto es un trabajo conjunto entre el sector público y privado. </p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 class="card-title text-center fw-bold">HAZ PARTE DE ESTA GRAN INICIATIVA</h5>
                <div class="d-grid gap-2 col-6 mx-auto">
                 <a href="/Registro" button class="btn btn-success" type="button">REGISTRA TU EMPRESA</a>
                </div>
                <div class="card mb-3 p-2">
                    <div class="card-body text-success">
                        <div class="row align-items-start">
                            <div class="col">
                                <div><i class="bi bi-truck-flatbed fs-1"></i> Transporte de carga</div>
                                <div><i class="bi bi-lightning-charge-fill fs-1"></i> Montajes electricos</div>
                                <div><i class="bi bi-heart-half fs-1"></i> Laboratorios y analisis tecnicos</div>
                                <div><i class="bi bi-question-diamond-fill fs-1"></i> Servicios de consultoria</div>
                                <div><i class="bi bi-recycle fs-1"></i> Servicios ambientales</div>
                            </div>
                            <div class="col">
                                <div><i class="bi bi-gear fs-1"></i> Montajes metalmecanicos</div>
                                <div><i class="bi bi-cone-striped fs-1"></i> Obras civiles</div>
                                <div><i class="bi bi-egg-fried fs-1"></i> Catering</div>
                                <div><i class="bi bi-cart4 fs-1"></i> Suministros</div>
                                <div><i class="bi bi-bandaid fs-1"></i> Servicios de salud</div>
                            </div>
                            <div class="col">
                                <div><i class="bi bi-truck fs-1"></i> Otros transportes</div>
                                <div><i class="bi bi-pc-display-horizontal fs-1"></i> Servicios TIC</div>
                                <div><i class="bi bi-heart-half fs-1"></i> Servicios generales y mantenimiento</div>
                                <div><i class="bi bi-tornado fs-1"></i> Energia eolica</div>
                                <div><i class="bi bi-brightness-high fs-1"></i> Energia solar</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default inicio
