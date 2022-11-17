import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='main'>
            <h2 className='itemH2'>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer