import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import ProductAll from './page/ProductAll';
import SignIn from './page/SignIn';
import ProductDetail from './page/ProductDetail';
import NavBar from './component/NavBar';
import PrivateRoute from './route/PrivateRoute';

//1. 전체상품페이지, 로그인, 상품상세페이지
//1-1. Navigation bar 만들기
//2. 전체상품페이지에서는 전체 상품이 보여짐
//3. 로그인 버튼을 누르면 로그인 페이지가 보여짐
//4. 로그인 전 상품상세를 누르면 로그인 페이지가 보여짐
//5. 로그인 완료된 후에는 상품상세 페이지 확인 가능
//6. 로그아웃 버튼을 클릭하면 로그아웃
//7. 로그아웃이 되면 상품 상페 페이지를 볼 수 없고 로그인 페이지가 보여짐
//8. 로그인/로그아웃 버튼이 자동 바뀜
//9. 상품 검색 가능

function App() {

  //로그인 상태 관리, true = 로그인 상태
  const[authenticate, setAuthenticate] = useState(false);

  //authenticate 값이 바뀔 때마다 잘 바뀌는지 확인
  useEffect(()=>{
    console.log("authenticate: ",authenticate)
  },[authenticate]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductAll/>} />
        <Route path="/signin" element={<SignIn setAuthenticate={setAuthenticate}/>} />
        {/* 아래 코드가 리다이렉트 만들며 아래 아래 코드로 수정됨 */}
        {/* <Route path="/product/:id" element={<ProductDetail/>} /> */}
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
