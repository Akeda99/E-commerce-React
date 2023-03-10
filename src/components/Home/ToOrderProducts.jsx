import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingOrderProducts, descendingOrderProducts } from '../../store/slices/products.slice'

const ToOrderProducts = () => {
    const dispatch= useDispatch()

    const handleAscending = () =>{
        dispatch(ascendingOrderProducts())
        
    }
    const handleDescending =() =>{
        dispatch(descendingOrderProducts())
    }
  return (
    <div>
        <button className='ascending-button' onClick={handleAscending}> Ascending Order</button>
        <button className='descending-button' onClick={handleDescending}>Descending Order</button>
    </div>
  )
}

export default ToOrderProducts