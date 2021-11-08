import React from "react";
import Imagem from "./Imagens"
import "./Container.css"

export default function Container() {
    return (
        <div id="geral">
            <div className="areaText">
                <h1>Galeria de Imagens</h1>
                <h3>Aqui você encontra as imagens mais diversas</h3>
            </div>
            <div id="area-Img">
                <Imagem titulo="Black Clover"/>
                <Imagem titulo="Imagem 2"/>
                <Imagem titulo="Imagem 3"/>
                <Imagem titulo="Imagem 4"/>
            </div>
            <div className="areaText">
                <h3>Galeria</h3>
                <h4>As mais belas imagens</h4>
                <h4>Copyright Ronaldo 2021</h4>
            </div>
        </div>      
    );
};

