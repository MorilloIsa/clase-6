import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
const API='https://dummyjson.com/products/search?q=';
import CardProducts from "../components/CardProducts";



const Busquedas = ({carrito, agregarAlCarrito}) => {

const location = useLocation();
const txtBuscar = location.state?.trim() || '';
const [datos, setDatos] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
//const URI = API+ txtBuscar
const URI = txtBuscar ? API + encodeURIComponent(txtBuscar) : null; 



const getDatos = async () => {
        try {
            const response = await fetch(URI);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setDatos(data.products);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        getDatos();
    }, [txtBuscar]);
    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Cargando Personajes...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="text-center py-5 text-danger">
                <h4>Error al cargar los Personajes</h4>
                <p>{error}</p>
            </div>
        );
    }


  return (

    <div className="container">
    <h4 className="text-center py-4">Buscando ... {txtBuscar}</h4>
    <div className='row'>
            {datos.map((item)=>(

                <CardProducts 
                key={item.id} 
                item={item} 
                carrito={carrito} 
                agregarAlCarrito={agregarAlCarrito}/>
            
            ))}

             
        </div>

        </div>
  )
}

export default Busquedas