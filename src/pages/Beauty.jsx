import React, { useEffect, useState } from 'react'

const API="https://dummyjson.com/products/category/beauty"
const Beauty = () => {
    const [datos, setDatos] = useState([]); //datos: Almacena los productos recibidos de la API.
    const [loading, setLoading] = useState(true); //loading: Indica si la carga está en progreso (para mostrar un spinner).
    const [error, setError] = useState(null); //error: Guarda el mensaje de error si la petición falla.
    
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            if (!response.ok) {
                throw new Error("HTTP error! status: " + response.status);
            }
            const data = await response.json();

            setDatos(data.products);
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
    <div className='container'>
        <h4 className='text-center py-4'>Beauty</h4>
        <div className='row'>
            {datos.map((item)=>(
            <div className='col-6 col-sm-6 col-md-4 col-lg-3 mb-4'>
               <div className='card h-100'>
                <div className='card-header'>
                     <img src={item.thumbnail} alt={item.title} className='img-fluid' />
                </div>
               
                <div className='card-body text-center'>
                   <p className='fs-5 fw-bold'>{item.title}</p> 
                   <p className='text-muted'>Marca: {item.brand}</p>
                   <p className='fw-bold fs-4 text-danger'> {item.price}</p>
                </div>
                <div className='card-footer text-center'>
                    <button className='btn btn-outline-info btn-sm me-3'>
                        Modal
                    </button>
                    <button className='btn btn-outline-warning btn-sm'>
                        Detalle
                    </button>
                </div>
                </div> 
            </div>
            ))}

             
        </div>
       
        
        </div>
  )
}

export default Beauty