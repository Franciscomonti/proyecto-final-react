import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/item_list/itemList'
import {getFirestore, collection, getDocs, query ,where} from 'firebase/firestore'




const ItemListContainer = () => {
    
    const [listaProductos, setListaProductos] = useState([])
    const [loadSpin, setLoadSpin] = useState(false)
    const {idCategory} = useParams()
    
    useEffect(() => {
        const db = getFirestore();
        let itemQuery = collection(db, 'productos');

        if (idCategory !== undefined) {
            itemQuery = query(itemQuery, where("marca","==", idCategory))
        }
        
        getDocs(itemQuery).then((snapshot)=> {
            const docs = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))

        setListaProductos(docs); 
        setLoadSpin(true)
    })

    },[idCategory]);



    return <>{loadSpin ? <ItemList productos={listaProductos}/> : <div style={load_blq}><img src={ '/img/gifs/spinner.gif'} style={spinner_style} alt="Loading"></img>
    <p>Estamos Cargando tu Proxima Compra...</p></div>} </>


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


export default ItemListContainer