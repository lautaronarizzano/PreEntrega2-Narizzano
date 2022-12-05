import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { gFetch } from '../../../../helpers/gfetch'
import ItemList from '../../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        gFetch()
        .then(data => setProduct(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [])
    console.log(products)
    return (
        <main className='main'>

            <section className='banner'>
                <img className='banner' src="https://sites.google.com/site/hamburguesasxd2018/_/rsrc/1534801794271/home/BANNER.JPG" alt="" />
            </section>

        <section className='container-burger'>
            {loading? <p>.</p> : <h2 className='burger-h2'>Burgers</h2>}
            {loading ?
                <h2 className='loading'>loading...</h2>
                :
                <ItemList 
                products={products}
                />
            }

        </section>
        </main>
    )
}

export default ItemListContainer