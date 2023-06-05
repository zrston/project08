import React, { useState } from 'react'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import './App.css';
import { Form } from 'react-router-dom'
import Storage from './components/Storage'

import {Routes, Route} from 'react-router-dom'

function App() {

  const [list, setList] = useState([])

  /* 미션 수행 순서! 
  1) Route 처리
  - BrowserRouter, Routes, Route, ... etc
  - import, export

  2) App.js에 list state관리해주기
    - tip! 함수 또한 props로 보낼 수 있다는 것을 명심!
    ex) const[list, setList] = useState([])
      ...
      <Main list={list} setList={setList}

  3) Header Mission
  4) Product List Mission
  5) Product Item Mission
  6) Product Detail Mission
  */
  return (
    <div className='container'>
    <Header/>

    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/list' element={<ProductList list={list} setList={setList}/>}></Route>
      <Route path='/detail/:num' element={<ProductDetail list={list}/>}></Route>
      <Route path='/storage' element={<Storage/>}></Route>
    </Routes>
    
    
    <Footer/>
    </div>
  )
}


export default App