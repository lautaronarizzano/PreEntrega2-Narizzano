import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({initial = 1, stock = 10, onAdd}) => {
    const [count, setCount] = useState(initial)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const handleOnAdd = () =>{
        onAdd(count)
    }
    return (
        <div className='card'>
            <div className="card-header">
                <label htmlFor="">cantidad a comprar: <input type="number" value={count}  disabled/></label>
            </div>
            <div className="card-body">
                <button onClick={restar}>-</button>
                <button onClick={sumar}>+</button>
            </div>
            <div className="card-footer">
                <button onClick={ handleOnAdd }>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount