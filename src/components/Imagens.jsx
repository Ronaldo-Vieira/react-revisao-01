import React from "react";
import "./Imagens.css"
import Img from "./holagoila.jpg"

export default function Imagem(props) {

    const {titulo} = props

    return(
        <div className="container-Img">
            <img src={Img} alt="" />
            <div className="area-Text">
                <h2 className="titulo">{titulo}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi distinctio repudiandae dolore voluptas sequi omnis.
                </p>
                <button type="button">Ver</button>
            </div>
        </div>
    );
};