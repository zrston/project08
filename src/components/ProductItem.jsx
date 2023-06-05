import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductItem = ({item, idx}) => {
  const nav = useNavigate()

  console.log('item :' , item, 'idx : ', idx);
  /* Mission!
  1. 누군가가 item을 선택했을 떄, 해당 아이템에 대한 productDetail로 이동
    => 상품별로 고유번호 '/detail/1', '/detail/2'
  */ 
  return (
    <div className='product-container' onClick={()=>{nav(`/detail/${idx}`)}}>
      <img width='100px' src={item.src}></img>
      <p>{item.title}</p>
      <p>{item.price}원</p>
    </div>
  )
}

export default ProductItem