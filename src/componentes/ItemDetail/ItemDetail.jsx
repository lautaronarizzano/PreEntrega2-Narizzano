import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({product}) => {

    const { cartList, agregarCarrito} = useCartContext()

    const onAdd = (cant) => {

        console.log('La cantidad de productos agregados es:', cant)

        agregarCarrito( { ...product, cant } )
    }

    console.log(cartList)

    return (
        <div className='itemDetailContenedor'>
            <div className='itemDetail'>
                <div className='img-container'>
                    <img src={product.img} alt={product.nombre}  className='imgD'/>
                </div>
                <div className='info'>
                    <h3>{product.nombre}</h3>
                    <h3>{product.categoria}</h3>
                    <p>{product.info}</p>
                    <h4>precio: ${product.precio}</h4>
                    <ItemCount
                    stock={12}
                    initial={1}
                        onAdd={onAdd}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail