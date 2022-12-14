import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ product }) => {
    return (
        <div
            className='card-container'
        >
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    <h3 className='name-product'>{`${product.nombre} - ${product.categoria}`}</h3>
                </div>
                <div className="card-body">
                    <img src={product.img} alt={product.nombre} className='img' />
                    <h4 className='price-product'>${product.precio}</h4>
                </div>

                <div className="card-footer">
                    <Link to={`/item/${product.id}`}>
                        <button className="btn btn-outline-primary btn-block">
                            detalle del producto
                        </button>
                    </Link>
                </div>
            </div>


        </div>

    )
}

export default Item