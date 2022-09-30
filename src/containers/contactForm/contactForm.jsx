
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState,useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./contact_form.css"

const ContactForm = () => {

    const { cart, precioTotal } = useContext (CartContext)
    const [ id , setId ] = useState();
    const [ userFormData, setUserFormData ] = useState ({
        name: '',
        email: '',
        phone: '',
        address: '',
    })

    const cartItems = cart.map((item) => ({
        id: item.id,
        nombre: item.nombre,
        cantidadad: item.quantity,
    })
    )

    const newOrderInfo = {
        buyer: userFormData,
        items: cartItems,
        total: precioTotal(cart)
    }

    const changeHandler = (e) => {
        const newForm = {...userFormData, [e.target.name] : e.target.value}
        setUserFormData(newForm)
    }
        
    const submitHandler = (e) =>{
        e.preventDefault();
        const db = getFirestore();
        const contactFormCollection = collection(db, "contactform" );
        addDoc(contactFormCollection, newOrderInfo)
            .then((snapshot) => setId(snapshot.id))
    }

    return (
        <div>
            {typeof id !== 'undefined' ? 
            (
                <div>
                    <p>Detalle de compra:</p>
                    <p>Titular de compra: {newOrderInfo.buyer.name}</p>
                    <p>Telefono de contacto: {newOrderInfo.buyer.phone}</p>
                    <p>Correo electronico: {newOrderInfo.buyer.email}</p>
                    <p>el numero de pedido es : {id} </p>
                </div>
            ) 

            : (<form onSubmit={submitHandler} className="formulario_compra_blq">
                <div className="formulario_compra_card">
                    <label htmlFor="name" className="formulario_compra_label">Nombre: </label>
                    <input autoFocus="true" type="text" name="name" id="name" placeholder="Francisco Monti" onChange={changeHandler} value={userFormData.name} className="formulario_compra_input" required/>
                </div>

                <div className="formulario_compra_card">
                    <label htmlFor="email" className="formulario_compra_label">Email: </label>
                    <input type="email" name="email" id="email" placeholder="franciscomonti@gmail.com" onChange={changeHandler} value={userFormData.email} className="formulario_compra_input" required/>
                </div>

                <div className="formulario_compra_card">
                    <label htmlFor="phone" className="formulario_compra_label">Telefono: </label>
                    <input type="tel" name="phone" id="phone" placeholder="### - #######" onChange={changeHandler} value={userFormData.phone} className="formulario_compra_input" required/>
                </div>

                <div className="formulario_compra_card">
                    <label htmlFor="address" className="formulario_compra_label">Direccion: </label>
                    <input type="text" name="address" id="address" placeholder="Siempreviva 742 " onChange={changeHandler} value={userFormData.address} className="formulario_compra_input" required/>
                </div>

                <button className="formulario_compra_btn">Comprar</button>
            </form>)}
        </div>
    )
}

export default ContactForm;