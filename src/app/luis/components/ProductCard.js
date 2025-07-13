import Stilos from "../page.module.css";
import Boton from "./Button.jsx";

export default function ProductCard(props) {
  return (
    <div className={Stilos.productCard}>
      <h2 className={Stilos.titulo}>{props.marca}</h2>
        <p>{props.modelo}</p>
        <p>{new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(props.precio)}</p>
        <p>{props.categoria}</p>
        <p>Motor: {props.motor}</p>
        <Boton />
    </div>
  );
}