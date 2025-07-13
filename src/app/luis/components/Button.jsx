"use client";
import Stilos from "../page.module.css";

export default function Button() {
  function alerta() {
  alert("Agregado!");
}
  return (
    <div>
      <button className={Stilos.register} onClick={alerta}>Agregar</button>
    </div>
  );
  }
