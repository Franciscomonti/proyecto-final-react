import { useState } from "react"


const ImagenDesc = ({prod})=>{

    const [imagenActiva, setImagenActiva] = useState(prod.portada)

return(
        <div style= { productos_cards_img_blq }>
            <div style= { productos_cards_blq_img_peq }>
                <img onClick={() => setImagenActiva(prod.portada)} src={ prod.portada } alt={prod.key} style= { productos_cards_img_peq }/>
                <img onClick={() => setImagenActiva(prod.down)} src={ prod.down } alt={prod.key} style= { productos_cards_img_peq }/>
                <img onClick={() => setImagenActiva(prod.right)} src={ prod.right } alt={prod.key} style= { productos_cards_img_peq }/>
                <img onClick={() => setImagenActiva(prod.back)} src={ prod.back} alt={prod.key} style= { productos_cards_img_peq }/>
            </div>
        
            <div style= { productos_cards_blq_img_grande }>
                <img src={ imagenActiva } alt={prod.key} style= { productos_cards_img_grande }/>
            </div>    
        </div>
)};

export default ImagenDesc

const productos_cards_img_blq  = {
    display:'flex',
    justifyContent: 'space-between',
}

let productos_cards_blq_img_grande  ={
    height: '100%',
    display: 'flex',
    backgroundColor: '#f6f6f6',
    margin: '0px 5px',
}

const productos_cards_img_grande = {
    width: '650px',
    height: '300px',
    margin: 'auto',
    objectFit: 'contain',
}

const productos_cards_blq_img_peq = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}

const productos_cards_img_peq  = {
    width: '70px',
    height: '70px',
    objectFit: 'contain',
    cursor: 'pointer',
    backgroundColor: '#f6f6f6',
}

