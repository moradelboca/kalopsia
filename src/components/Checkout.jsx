import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button'
import { CartContext } from './CartProvider'
import { addDoc, collection, getFirestore, QuerySnapshot } from "firebase/firestore"
import { useNavigate } from "react-router-dom"


const buyer = {name:"", phone:null, direction:"", email:""}
export default function Checkout() {
  const navigate = useNavigate()
  const { cart, getTotalPrice, cartLength, clear } = useContext(CartContext)
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [orderID, setOrderID] = useState("")
  function handleBuyerData (e){
    buyer[e.target.name] = e.target.value
  }
  function sendOrder(){
    setLoading(true)
    const order = {buyer:{...buyer}, items: {...cart}, totalPrice: getTotalPrice()}
    const database = getFirestore()
    const ordersRef = collection(database, "orders")
    addDoc(ordersRef, order)
      .then( querySnapshot => {
        setOrderID(querySnapshot.id)
        clear()
      })
      .catch( err => {
        setErrorMessage("Hubo un error enviando su orden. Intente nuevamente.") 
      })
      .finally( () => setLoading(false))
  }
  function handleSubmitPuncharse(e) {
    e.preventDefault()
    // Validacion de datos
    if(!cartLength){
      setErrorMessage("No tienes items en el carrito!")
      return
    }
    if(buyer.name.length<4){
      setErrorMessage("El nombre no puede tener menos de 4 caracteres!")
      return
    }
    if(!buyer.phone || buyer.phone.length<6){
      setErrorMessage("El número de telefono ingresado es demasiado corto!")
      return
    }
    if(!buyer.email|| !buyer.email.includes("@") ){
      setErrorMessage("El mail ingresado es incorrecto!")
      return
    }
    if(!buyer.direction){
      setErrorMessage("Debes ingresar una direccion!")
      return
    }
    setErrorMessage("")
    //Enviar la orden
    sendOrder()
  }
  return (
    <div>
      <h2>{orderID ? "Gracias por tu compra!" : "Datos personales del comprador"}</h2>
      {loading && <p>Cargando...</p> }
      {
      orderID ?
        <div>
          <p>Tu numero de orden es: {orderID}</p>
          <Button onClick={() => navigate("/")}>Salir</Button>
        </div>
      :
        <form onSubmit={handleSubmitPuncharse}>
          <input type="text" autoComplete="new-password" placeholder='Nombre y Apellido' name="name" onChange={handleBuyerData} />
          <input type="number" placeholder='Telefono' name="phone" onChange={handleBuyerData} />
          <input type="text" autoComplete="new-password" placeholder='Email' name="email" onChange={handleBuyerData} />
          <input type="text" autoComplete="new-password" placeholder='Direccion de envio' name="direction" onChange={handleBuyerData} />
          <Button type="submit">Finalizar compra</Button>
        </form>
      }
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}
