import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
    const onAdd = (cant) => {
        console.log('La cantidad de productos agregados es:', cant)
    }
    console.log(product);
    return (
        <div>
            <div>
                <div>
                    <img src={product.img} alt="" />
                    <h3>nombre: {product.nombre}</h3>
                    <h3>categoria: {product.categoria}</h3>
                    <h4>precio: {product.precio}</h4>
                </div>
                <div>
                    <ItemCount
                    stock={5}
                    initial={1}
                        onAdd={onAdd}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail