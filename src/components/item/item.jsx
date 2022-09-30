import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext';
import ImagenDesc from '../imagen_desc/imagenDesc';
import ItemCount from '../item-count/itemCount';


const Item = ({ prod }) => {
    
    const {agregarProducto, estaEnCarrito} = useContext(CartContext)

    function agregar(quantity) {
        agregarProducto(prod, quantity)
    }

return(
    <div style={ productos_cards }>

        <ImagenDesc prod={prod}/>

        <div style={productos_cards_caract_blq }>
            <h2 style={ productos_cards_caract_marca}>{ prod.marca }</h2>
            <h2 style={productos_cards_title }> { prod.nombre } </h2>
            <h3 style={ productos_cards_price }><span style= { productos_cards_price_span }> ${ prod.precio }</span> </h3>
            <p style={ productos_cards_caract_descrip}>{prod.descripcion}</p>
            
            <div style={ productos_cards_caract_btn_blq}>
            
                { estaEnCarrito(prod.id) ? 
                        <Link to='/cart' style={productos_cards_caract_btn_add}>Ir al carrito</Link> 
                        : 
                        <ItemCount  style={ productos_cards_caract_btn_size}  stock={prod.stock} onAdd={agregar} />
                }
                <Link style={ productos_cards_caract_btn_add} to={`/detalle/${prod.id}`}>Detalles</Link>
            </div>
            
        </div>
    </div>
    
)}

const productos_cards = {
    width: '90%',
    height: '300px',
    padding: '5px',
    margin: '10px 20px',
    boxShadow: '10px 10px 0px #fafafa',
    display: 'flex',
    justifyContent: 'sapce-between',
    position: 'relative',
    backgroundColor: 'white',
} 

const productos_cards_caract_blq  = {
    width: '400px',
    margin: '0 0 0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

const productos_cards_caract_marca = {
    margin:'0',
    padding: '0',
}

const productos_cards_title = {
    fontSize: '16px',
    fontWeight: '500',
    margin:'0',
    padding: '0',
}

const productos_cards_caract_descrip = {
    margin:'10px 0px 20px',
    padding: '0',
    fontSize: '14px',
    textAlign: 'justify',
    overflow:   'hidden',
}

const productos_cards_price = {
    margin:'0',
    padding: '0',
}

const productos_cards_price_span = {
    margin:'0',
    padding: '0',
}

const productos_cards_caract_btn_blq = {
    height: '50px',
    display: 'flex',
}

const productos_cards_caract_btn_add = {
    margin: '5px',
    height: '40px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '0.5px solid transparent',
    backgroundColor: '#efefef',
    alignText: 'center',
    display: 'flex',   
    alignItems: 'center',
    justifyContent: 'center',     
    padding: '0px 5px', 
    textDecoration: 'none', 
    color: 'black',
    fontSize: '14px',
}


const productos_cards_caract_btn_size = {
    margin: '5px 10px 5px 0px',
    height: '40px',
    width: '40px',
    padding: '0px',
    color: 'white',
    backgroundColor: 'black',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '0.5 px solid transparent',
}




export default Item