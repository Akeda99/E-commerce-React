import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardProduct from '../components/Home/CardProduct'
import ProductDescription from '../components/ProductInfo/ProductDescription'
import Sliderimg from '../components/ProductInfo/Sliderimg'

import './styles/productInfo.css'
//el useparams Retorna un objeto con todos los parametros
//Despues de captar la info de api necesitamos mostrar la descripcion del producto por lo cual se ha creado una nueva carpeta en components llamado ProductInfo, con un componente llamado ProductDescription.jsx

// para que cuando uno esta en el productdescription y luego te recomiende otros productos relacionados a este se realiza un allproducts con un effect con una condicional dentro de esta, se ha creado un usestate similarproducts, la const allproducts y el useeffect previamente dicho.
const ProductInfo = () => {

    const {id}=useParams()

    const [product, setProduct] = useState()
    const [similarProducts, setsimilarProducts] = useState()
    const allProducts= useSelector(state=>state.products) // Serian todos los productos que estan guardados en el estado global

    useEffect(() => {
        const URL=`https://e-commerce-api.academlo.tech/api/v1/products/${id}`
        axios.get(URL)
        .then(res=>setProduct(res.data.data.product))
        .catch(err=>console.log(err))
    }, [id])
    
    useEffect(() => {
        if(allProducts && product){ // Como product y allproducts son asincronos no podemos saber cual se renderizara primero asi que usamos esta logica para que se rendericen cuando ambos esten renderizados
            const pivot=allProducts.filter(prod=> prod.category.name === product.category)
            setsimilarProducts(pivot)
        }
    }, [allProducts, product])
    

console.log(similarProducts);
  return (
    <div className='content-product-similar'>
        <div className="product-description">
            <div className="slider-description">
        <Sliderimg listImgs={product?.productImgs}/>
        </div>
        <div className="product-description-des">
        <ProductDescription product={product}/>
        </div>
        
        
        </div>
        <section className='similar-section-container'>
            <h2>Discover Similar Items</h2>
            <div className="similar-products-container">
                {
                     similarProducts?.map(simProd=>{
                        if(simProd.title!==product.title){
                            return (
                                <CardProduct key={simProd.id}
                                    product={simProd}
                                />
                            )
                        }

                     })
                }
            </div>
        </section>
    </div>
  )
}

export default ProductInfo