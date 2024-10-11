import React, { useState } from 'react'
import { useEffect } from 'react';
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

  const [productList, setProductList] = useState([]);

  //검색기능 q값 가져오기 위한 코드
  //q값만 보내주면 json-server에서 자동으로 검색해서 관련 상품 보여줌
  const [query, setQuery] = useSearchParams();

  const getProducts= async ()=>{
    let searchQuery=query.get("q") || "";
    console.log("query: ", searchQuery);

    //배포 시 url 변경 
    // let url = `http://localhost:5000/products?q=${searchQuery}`;
    let url = `https://my-json-server.typicode.com/valencia28/online-store/products?q=${searchQuery}`;

    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    console.log("data: ", data)
  }

  //useEffect는 배열이 비어있으면 처음 렌더링 될 때만 실행
  useEffect(()=>{
    getProducts();
  },[query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item)=>(
            <Col xl={3} md={4} xs={6}><ProductCard item={item}/></Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll