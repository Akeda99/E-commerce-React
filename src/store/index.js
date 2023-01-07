// 1-importar con el comando configureStore y luego poner reducer en el configureStore(son las acciones basicamente)
// 2-El reducer funciona como un objeto ahi pondremos los valores por defecto, pero primero para configurar redux se necesita poner el Provider en Main.jsx

import { configureStore} from "@reduxjs/toolkit";
import products from './slices/products.slice' //3-Como es un export default se puede poner cualquier nombre en este caso se escogio products, ahora despues de eso se ira a App.jsx para poder invocarlo la variable global
// 4- poner export default en configureStore para poder exportar la informacion.
import cart from './slices/cart.slice'
export default configureStore({
reducer:{
products,
cart
}
})

