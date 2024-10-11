import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail =()=>{
    navigate(`/product/${item.id}`);
  }

  return (
    <div onClick={showDetail}>
      <div className="product-card-img-area">
        <img className="product-card-img" src={item?.img} />
      </div>
      <div>{item?.choice == true?"CONSCIOUS CHOICE" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new == true?"NEW":""}</div>
    </div>
  )
}

export default ProductCard
