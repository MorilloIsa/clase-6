import React, { useEffect, useState } from 'react'
import CardProducts from '../components/CardProducts';
const API="https://dummyjson.com/products/category/"


import { useParams } from "react-router-dom"

const Categorias = () => {
    const [datos, setDatos] = useState([]); //datos: Almacena los productos recibidos de la API.
        const [loading, setLoading] = useState(true); //loading: Indica si la carga está en progreso (para mostrar un spinner).
        const [error, setError] = useState(null); //error: Guarda el mensaje de error si la petición falla.
        const parametro=useParams()
        const URI=API+parametro.cat

        const getDatos = async () => {
            try {
                const response = await fetch(URI);
                if (!response.ok) {
                    throw new Error("HTTP error! status: " + response.status);
                }
                const data = await response.json();
    
                setDatos(data.products);
               // console.log("Mostrar los datos del api")
               // console.log(data)
    
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        useEffect(() => {
            getDatos();
        }, [parametro.cat]);
    
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
     <div className='container'>
        <h4 className='text-center py-4'>Movil</h4>
        <div className='row'>
            {datos.map((item)=>(

                <CardProducts key={item.id} item={item}/>
            
            ))}

             
        </div>
       
        
        </div>
  )
}


export default Categorias