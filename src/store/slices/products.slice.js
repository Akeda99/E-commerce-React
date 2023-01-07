// 1-poner CreateSlice (la cual es una funcion) para importarlo y dentro de createSlice pondremos sus objetos para crear las variables el initialState es el valor que tendra, el name sera para identificarlo.
//2-debemos guardar el createSlice dentro de una constante
//3-exportar por default el reducer de la nueva constante
// 4-luego tambien debemos exportar las acciones de la constante, y lo vamos a exportar como una constante el setProductsGlobal Desestructurandolo ({})
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice=createSlice({
name: 'products',
initialState: null,
reducers:{
    setProductsGlobal: (state,action)=>action.payload,
    ascendingOrderProducts: state=>{
        state.sort((a,b)=>+a.price - +b.price)
    },
    descendingOrderProducts: state=>{
        state.sort((a,b)=>+b.price - +a.price )
    }
}
})

export const {setProductsGlobal, ascendingOrderProducts,descendingOrderProducts}=productsSlice.actions

export default productsSlice.reducer // 5-Este es el representante segun el profe no se a que se refiere jajajs pero lo importamos en el index.js ya con esto podriamos observar si funciona en App.

//6- despues de ver que las variables globales estan conectadas con la App procederemos a obtener informacion de la Api aqui creando como siempre un axios.get con su then y catch, la unica diferencia seria el dispatch asi como tambien el export, tambien debemos guardar la informacion que nos llega de la api en la variable setProductsGlobal y usar dispatch para ejecutar cualquier accion que esta en esta variable, luego de esto iremos a App a ejecutarlo.
export const getAllProducts=()=> (dispatch)=>{ 
    const URL='https://e-commerce-api.academlo.tech/api/v1/products'
    axios.get(URL)
    .then(res=>dispatch(setProductsGlobal(res.data.data.products))) // esto al inicio era res.data pero cuando obtuvimos la info de la api nos dimos cuenta que la informacion esta guardada en un data mas y tambien dentro de products asi que lo cambiamos a: res.data.data.products
    .catch(err=>console.log(err))
}

export const getProductsByCategory = (id) => (dispatch) => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`
    axios.get(URL)
      .then(res => dispatch(setProductsGlobal(res.data.data.products)))
      .catch(err => console.log(err))
  }
  