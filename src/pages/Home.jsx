// 1- procederemos a poner lo de la App aqui para acceder a la informacion de la Api, asi como tambien hacer un map de products con su condicional, antes de completar el map vamos a crear los componentes de home.jsx empezando por el CardProduct
// 2- lo importamos el CardProduct con su respectivo key y vamos a mostrar en la pagina a traves de CardProduct la inforamcion.
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CardProduct from '../components/Home/CardProduct';
import FilterCategory from '../components/Home/FilterCategory';
import FilterPrice from '../components/Home/FilterPrice';
import ToOrderProducts from '../components/Home/ToOrderProducts';
import Cart from './Cart';
import './styles/home.css'
const Home = () => {




  const [productsFilter, setProductsFilter] = useState()
  const [inputValue, setInputValue] = useState("")
  const [inputPrice, setInputPrice] = useState({
    from: 0,
    to: Infinity
  })
  const products=useSelector(state=> state.products)  
  
  useEffect(() => {
    if(products) {
      setProductsFilter(products)
    }
  }, [products])

  const handleChange = e => {
    const inputValue = e.target.value.toLowerCase().trim()
    const filter = products?.filter(prod => prod.title.toLowerCase().includes(inputValue))
    setProductsFilter(filter)
    setInputValue(e.target.value)
  }
  const filterCallBack= prod => +prod.price >= inputPrice.from && +prod.price <= inputPrice.to


  return (
    <div className="container">
      <div className="cart ">
        
       
      </div>
    <div className="content">
    <div className="left_content">

        <FilterPrice setInputPrice={setInputPrice}/>
        <FilterCategory setInputValue={setInputValue}/>
        <ToOrderProducts/>
      </div>
      <div className="top_content">
        <input  value={inputValue} type="text" placeholder='  What are you looking for?' onChange={handleChange} />
        <button className='button_search'><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div className='products-container'>
            {
                productsFilter?.filter(filterCallBack).length !== 0 ?
                productsFilter?.filter(filterCallBack).map(product => (
                    <CardProduct 
                        key={product.id}
                        product={product}
                    />
                ))
                :
                <h1>There are no products with this price</h1>
            }
        </div>

    </div>
    <script src=''></script>
    </div>
   
  )
}

export default Home
//Nota: Key={} es importante para la renderizacion de la informacion