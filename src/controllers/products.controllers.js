//PARA TODOS LOS PRODUCTOS
export const showProducts = (req,res)=>{
    res.send('Lista de productos');
}

export const createProduct = (req,res)=>{
    res.send('se creo el producto');
}

// PARA UN SOLO PRODUCTO
export const getOne = (req,res)=>{
    res.send('Listar un producto');
}
export const editProduct = (req,res)=>{
    res.send('se edito el producto');
}
export const updateProduct = (req,res)=>{
    res.send('se actualizo el producto');
}
export const deleteProduct = (req,res)=>{
    res.send('se elimino el producto');
}


// export const  = (req,res)=>{
//     res.send('se creo el producto');
// }