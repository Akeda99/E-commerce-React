//Ponemos las cosas que vamos a mostrar en CardProduct, luego de ello nos damos cuenta que lo que queremos tambien es que cuando se haga click en uno de los productos nos muestre una nueva ruta con mas informacion y detalles del producto por lo cual crearemos un nueva route en App.jsx

// Hemos creado un usenavigate que nos permitiria y a otra ruta, cuando pongan click en un producto los envie a ProductInfo, luego de ello necesitaremos configurar el ProductInfo
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardProduct.css'
import getConfig from '../../utils/getConfig'
import { useDispatch, useSelector } from 'react-redux'
import cartSlice, { getUserCart } from '../../store/slices/cart.slice'
import axios from 'axios'


const CardProduct = ({product}) => {
    
    const navigate=useNavigate()
    const dispatch= useDispatch()
    const cart= useSelector(state=>state.cart)
    const handleClick=()=>{
        navigate(`/product/${product.id}`)
    }
    const handleBtnClick=(e)=>{
      e.stopPropagation()
      const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
      const data={
        id:product.id,
        quantity:1
      }
      getConfig
      axios.post(URL,data, getConfig())
      .then(res=>{
        console.log(res.data)
        dispatch(getUserCart())
      
      })
      .catch(err=>{
        if(err.response.status === 400){
          //update
          const URLPatch = 'https://e-commerce-api.academlo.tech/api/v1/cart'
          const prevQuantity = cart.filter(e => e.id === product.id)[0].productsInCart.quantity
          const data = {
            id: product.id,
            newQuantity: prevQuantity + 1
          }
          axios.patch(URLPatch, data, getConfig())
            .then(res => {console.log(res.data)
              dispatch(getUserCart())
            })
            .catch(err =>console.log(err))
        }

    })
  }
  return (
<article className='product' onClick={handleClick}>
      <header className='product__header'>
        <img className='product__img' src={product.productImgs[0]} alt="" />
        <img className='product__img' src={product.productImgs[1]} alt="" />
      </header>
      <section className='product__body'>
        <h3 className='product__name'>{product.title}</h3>
        <article className='product__price-container'>
          <span className='product__price-label'>Price</span>
          <h4 className='product__price-number'>{product.price}</h4>
        </article>
        <button onClick={handleBtnClick} className='product__btn'><i className="fa-solid fa-cart-plus"></i></button>
      </section>
    </article>
  )
}

export default CardProduct