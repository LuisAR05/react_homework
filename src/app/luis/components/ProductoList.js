"use client";
import { useState } from "react";
import Card from "./Productos";
import Stilos from "../page.module.css";

export default function ProductoList() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className={Stilos.contenedorP}>
      <button className={Stilos.mostrarP} onClick={() => setMostrar(true)}>
        Ver Productos
      </button>
      <div className={Stilos.nuevosP}>
      {mostrar && (
          <Card />
      )}
      </div>
    </div>
  );
}