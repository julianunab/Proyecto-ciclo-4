import React from "react"
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <div id="footer" class="p-3 text-light fw-boldgr4ghb">
                <div class="container bg-success">
                    <div class="row justify-content-md-center py-5">
                        <div class="col text-center font-weight-light">
                            <p>Correo </p>
                            <div><p><i class="bi bi-envelope"></i>  clusterenergiarenovableoilygas@gmail.com</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer