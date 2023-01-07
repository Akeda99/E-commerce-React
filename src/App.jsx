// npm instalados: npm i react-router-dom axios @reduxjs/toolkit react-redux

//    {/* 1-Routes y Route primero  asi como tambien hashroutes en main.jsx*/ (esto es el inicio del inicio.)

//     {/* 2-Crear la carpeta pages (paginas) donde estaran las paginas empezando por Home */}

// {/* 3- poner el redux(crear carpeta store y dentro el index.js) es para poder crear variables globales */}

// 4-Despues de volver a hacer lo que teniamos que hacer con respecto a las variables globales, tenemos que traer la variable global creada aqui a App.jsx, lo traemos con useSelector con un callback de .products, el useselector debe estar dentro de una constante, para usarlo bastantes veces, el cual para un reconocimiento mas facil se le pondra el mismo nombre que la misma variable global, luego de ello iremos a products.slice.js

// 5-Despues de volver de Products.slice.js y obtener informacion de la Api a traves de un axios.get necesitamos traerlo usando un useEffect en getAllProducts() y debemos dispatchearlo con useDispatch ya que es un thunk, despues de eso iremos a la page Home.jsx

//6- Despues de mostrar lo que queremos en Home a traves de cardProduct necesitamos una nueva ruta para cada producto al hacer click asi que se crea una nueva jsx en la carpeta pages con el nombre Product Info, para ello iremos a poner un handleclick en cardproduct para cada producto.
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductInfo from './pages/ProductInfo'
import Purchases from './pages/Purchases'
import Footer from './shared/Footer'
import NavBar from './shared/NavBar'
import ProtectedRoutes from './shared/ProtectedRoutes'
import { getAllProducts } from './store/slices/products.slice'

function App() {

  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  

  return (
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/product/:id' element={<ProductInfo/>}/> 
      {/* Rutas protegidas */}
      <Route element={<ProtectedRoutes/>}>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/purchases' element={<Purchases/>}/> 
      </Route>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
// const products=useSelector(state=> state.products)  Esto se utilizo para ver si esta todo conectado con las variables globales y tambien para ver si accedemos a la data del api, esto se podria poner en App , pero aqui se pondra todo lo que tenga que ver con asincronia, en Home pondremos toda la informacion de los products.
// console.log(products);

//este es el codigo para crear un nuevo usuario
// useEffect(() => {
// const URL='https://e-commerce-api.academlo.tech/api/v1/users'
// const data = {
//   firstName: "Ray Kevin",
//   lastName: "Cardenas Mayma",
//   email: "raykevin_14@hotmail.com",
//   password: "vivaeldota123",
//   phone: "9616424882",
//   role: "Developer"
// }
// axios.post(URL,data)
// .then(res=> console.log(res))
// .catch(err=>console.log(err))

// }, [])
// Aqui termina
