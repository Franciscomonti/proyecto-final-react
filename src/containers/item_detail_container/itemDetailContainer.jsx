
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/item_detail/itemDetail';
import {getFirestore, doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [Item, setItem ] = useState()
    const [loadSpin, setLoadSpin] = useState(false)
    const {idProducto} = useParams()

    useEffect(() =>{
        
            const db = getFirestore();
            const itemRef = doc(db, 'productos', idProducto);
            getDoc(itemRef).then((snapshot) => {

            const producto = {id: snapshot.id, ...snapshot.data()};

                setItem(producto)
                setLoadSpin(true)
            })
        
    }, [idProducto])



return <>{loadSpin ? <ItemDetail producto={Item} key={Item.id} /> : <div style={load_blq}> <img src={ '/img/gifs/spinner.gif'} style={spinner_style} alt="Loading"/> <p>Estamos Cargando los detelles del producto...</p></div>} </>

}

const load_blq = {
    display: 'flex',
    flexDirection: "column",
    margin: "300px auto",
    width: "400px",
    alignItems: "center",
}
const spinner_style = {
    width: "200px",
    objectFit: "cover",
}

export default ItemDetailContainer