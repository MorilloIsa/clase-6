
import { Link } from 'react-router-dom';
import { formatCurrency } from '../util/util';
const CardProducts = ({item}) => {
  return (
   <div className='col-6 col-sm-6 col-md-4 col-lg-3 mb-4'>
               <div className='card h-100'>
                <div className='card-header'>
                    <img src={item.thumbnail} alt={item.title} className='img-fluid' /> 
                </div>
               
                <div className='card-body text-center'>
                   <p className='fs-5 fw-bold'>{item.title}</p> 
                   <p className='text-muted'>Marca: {item.brand}</p>
                   <p className='fw-bold fs-4 text-danger'> {formatCurrency(item.price)}</p>
                </div>
                
                <div className='card-footer text-center'>
                    <button className='btn btn-outline-info btn-sm me-3' data-bs-toggle="modal" data-bs-target={`#${item.id}`}>
                        
                        Modal
                    </button>

                    <Link to={`/detalle/${item.id}/${item.title}`} className='btn btn-outline-warning btn-sm'>
                        Detalle
                    </Link>
                </div>
            
                </div> 

               <div className="modal fade" id={item.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">

    <div className="modal-dialog modal-lg"> 
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" >{item.title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">

        <div className="row">

        <div className='col-md-4'>

            <img src={item.thumbnail} alt={item.title} className='img-fluid' />
           
        </div>

        <div className='col-md-8'>
         <p className='fs-4'>{item.title}</p>
         <p>
            <b>Categoria:</b> {item.category}<br/>
            <b>Marca:</b> {item.brand}<br/>
            <b>Existencia</b> {item.stock}<br/>
         </p>

        <p>
        <b>Descripcion: </b>{item.description}
        </p>
        <p className='text-danger fs-4'> <b>Precio: </b>{formatCurrency(item.price)}</p>
        </div>

        </div>

      </div>
      <div className="modal-footer">
        
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

            </div>
  )
}

export default CardProducts