import Stilos from "./page.module.css";
import Productos from "./components/Productos";
import Nuevos from "./components/ProductoList";

export default function paginaPrincipal() {
    return (
        <div className={Stilos.main}>
            <div className={Stilos.Button}>
                <div className={Stilos.contenedor}>
                <Productos />
                </div>
            </div>
            <Nuevos />
            <a href="../../../">ATRAS</a>
        </div>
    )
}