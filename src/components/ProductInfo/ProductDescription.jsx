// Se hace la descripcion del producto y ahora haremos la parte de abajo que seria las recomendaciones de la pagina de productos similares y para eso iremos a product info. 
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'

const ProductDescription = ({product}) => {

  const [counter, setCounter] = useState(1)
  const cart= useSelector(state=>state.cart)

  const handleMinus = () => {
    if(counter - 1 > 0){
      setCounter(counter - 1)
    }
  }

  const handlePlus = () => {
    setCounter(counter + 1)
  }
  const dispatch=useDispatch()
  const handleCart=()=>{
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
    const data = {
      id: product.id,
      quantity: counter
    }

    axios.post(URL,data,getConfig())
    .then(res=>{
      console.log(res.data)
      dispatch(getUserCart())
    })
    .catch(err=>{console.log(err)
    if(err.response.status===400){
      const URLPatch= 'https://e-commerce-api.academlo.tech/api/v1/cart'
      const prevQuantity= cart.filter(e=> e.id === product.id)[0].productsInCart.quantity
      const data={
        id: product.id,
        newQuantity: prevQuantity + counter
      }
      axios.patch(URLPatch,data,getConfig())
      .then(res=>{
        console.log(res.data)
        dispatch(getUserCart())
      })
      .catch(err=>console.log(err))
    }
    })
  }

  return (
    <article>
      <h3 className='title-direction'>Home<strong> · </strong> <span>${product?.title}</span></h3>
      <div className="container-content">
      {/* <div className="img-div">
      <img className='img-principal' src={product?.productImgs[0]} alt="" />
      </div> */}
      <div className="title-desc">
      <h2 className='title-product-especific'>{product?.title}</h2>
      <p className='description'>{product?.description}</p>
   <div className="price-quantity">
      <section className='price'>
        <span>Price</span>
        <h3>{product?.price}</h3>
      </section>
      
      <section className='quantity'>
        <span>Quantity</span>
        <div className='plus-minus'>
          <div onClick={handleMinus} className='minus'>-</div>
          <div className='counter'>{counter}</div>
          <div onClick={handlePlus} className='plus'>+</div>
        </div>
      </section>
      </div>
      <button onClick={handleCart} className='button-cart-info'>Add to Cart <i className="fa-solid fa-cart-plus"></i></button>
      </div>
      </div>
      
    </article>
  )
}

export default ProductDescription