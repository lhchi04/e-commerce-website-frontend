import React from 'react'
import './Learn.css'
import arrow_icon from '../Assets/arrow.png'

const Learn = () => {
  return (
    <div className='learn'>
          <h1>Our founder</h1>
          <p>Văn Thị Tâm</p>
          <button>Tìm hiểu thêm</button>
          <img src={arrow_icon} alt="" />
    </div>
  )
}

export default Learn
