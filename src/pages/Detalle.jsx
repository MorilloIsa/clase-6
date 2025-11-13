import { useNavigate, useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { formatCurrency } from "../util/util";
const API="https://dummyjson.com/products/"

const Detalle = ({carrito, agregarAlCarrito}) => {
    const [datos, setDatos] = useState([]); //datos: Almacena los productos recibidos de la API.
    const [loading, setLoading] = useState(true); //loading: Indica si la carga está en progreso (para mostrar un spinner).
    const [error, setError] = useState(null); //error: Guarda el mensaje de error si la petición falla.
    const parametros=useParams()
    const URI=API+parametros.id
    const navigate = useNavigate();

    const getDatos = async () => {

            try {
                const response = await fetch(URI);
                if (!response.ok) {
                    throw new Error("HTTP error! status: " + response.status);
                }
                const data = await response.json();
    
                setDatos(data);
                console.log("Mostrar los datos del api")
                console.log(data)
    
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        useEffect(() => {
            getDatos();
        }, []);
    
       if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Cargando Productos...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-5 text-danger">
                <h4>Error al cargar los Productos</h4>
                <p>{error}</p>
            </div>
        );
    }













  return (
    <div className="container py-4">

         {/* Botón Volver */}
            <div className="d-flex justify-content-end mb-3">
                <button onClick={() => navigate(-1)} className="btn btn-secondary">
                    ← Volver
                </button>
            </div>
        
        <h4 className="text-center py-4">Detalle del Producto {parametros.titulo}</h4>
        
                <div className="row">

                <div className='col-md-4'>
        
                    <img src={datos.thumbnail} alt={datos.title} className='img-fluid' />
                   
                </div>
        
                <div className='col-md-8'>
                 <p className='fs-4'>{datos.title}</p>
                 <p>
                    <b>Categoria:</b> {datos.category}<br/>
                    <b>Marca:</b> {datos.brand}<br/>
                    <b>Existencia</b> {datos.stock}<br/>
                 </p>
        
                <p>
                <b>Descripcion: </b>{datos.description}
                </p>
                <p className='text-danger fs-4'> <b>Precio: </b>{formatCurrency(datos.price)}</p>
                </div>
        
                </div>

                {datos.reviews.map((item)=>(
                    
                    <div className="card m-4 p-4 ">

                        <p> Comentario: {item.comment}</p>
                        <p>Puntuacion: {item.rating}</p>
                        <p>Fecha: {item.date}</p>
                        <p>E-mail: {item.reviewerEmail}</p>
                        <p> Nombre: {item.reviewerName}</p>
                        
                    </div>

                ))}
               
               

    </div>
  )
}

export default Detalle