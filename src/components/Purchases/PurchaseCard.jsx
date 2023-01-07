import React from 'react'
import './styles/purchaseCard.css'
const PurchaseCard = ({purchase}) => {
    console.log(purchase);
  return (
    <article className='purcharse-card-container'>
        <div className="createdAt-container">
        <h3>{purchase.createdAt}</h3>
        </div>
    <div>
        <ul className='purchased-product-container'>
            {
                purchase.cart.products.map(prod=>(
                    <li key={prod.id} className='purchased-product'>
                        <h4 className='purchased-title'>{prod.title}</h4>
                        <h5 className='purchased-quantity'>{prod.productsInCart.quantity}</h5>
                        <span className='purchased-price'>${prod.price}</span>
                    </li>
                ))
            }
        </ul>
    </div>
    </article>
  )
}

export default PurchaseCard