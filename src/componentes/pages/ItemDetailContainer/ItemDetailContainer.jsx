import React, {useState, useEffect} from 'react'
import { gFetch } from '../../../../helpers/gfetch'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])

  const {productId} = useParams()

  useEffect(() => {
    gFetch()
      .then(respProd => setProduct(respProd.find(prod => prod.id === productId)))
      .catch(err => console.log(err))

  })

  console.log(productId);
  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer