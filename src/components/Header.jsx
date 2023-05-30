import React from 'react'

const Header = () => {
  /* Mission!
  로고를 클릭 => 메인창으로
  메인창을 클릭 => 메인창으로
  목록을 클릭 => ProductList
  */
  return (
    <div className='header-container'>
      <div className='link-container'>
        로고
      </div>
      <div className='link-container'>
        메인창
        목록
      </div>
      <div className='link-container'>
        로그인
      </div>      
      </div>
  )
}

export default Header