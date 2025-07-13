import ProductCard from './ProductCard.js';
import Card from './ProductCard.js';

const productos = [
                {
                    marca: "Ferrari",
                    modelo: "F8",
                    precio: 250000,
                    categoria: "Deportivo",
                    motor: "V8",
                },
                {
                    marca: "Chevrolet",
                    modelo: "Corvette",
                    precio: 120000,
                    categoria: "Deportivo",
                    motor: "V8",
                },
                {
                    marca: "Lamborghini",
                    modelo: "Huracán",
                    precio: 300000,
                    categoria: "Deportivo",
                    motor: "V10",
                },
                {
                    marca: "Lotus",
                    modelo: "Evora",
                    precio: 85000,
                    categoria: "Deportivo",
                    motor: "V6",
                },
                {
                    marca: "Mercedes-Benz",
                    modelo: "AMG GT",
                    precio: 150000,
                    categoria: "Deportivo",
                    motor: "V8",
                },
                {
                    marca: "Porsche",
                    modelo: "911",
                    precio: 120000,
                    categoria: "Deportivo",
                    motor: "H6",
                },
            ];

export default function Productos(){
    return(
        <>
            {productos.map((producto, index) => (
                <Card
                    key={index}
                    marca={producto.marca}
                    modelo={producto.modelo}
                    precio={producto.precio}
                    categoria={producto.categoria}
                    motor={producto.motor}
                />
            ))}
        </>
    );
};