import React from 'react'
import './Ingredients.css'
import qua from '../Assets/qua.jpg'

const Ingredients = () => {
  return (
    <div className='ingredients'>
        <h1>Nguyên liệu</h1>
        <hr />
        <div className="ingredients-items">
            <div className='ingredients-item'>
              <img src={qua} alt="" />
              <h3>Ing 1</h3>
              <p>Something about this ingredient.</p>
            </div>
            <div className='ingredients-item'>
              <img src={qua} alt="" />
              <h3>Ing 2</h3>
              <p>Something about this ingredient.</p>
            </div>
            <div className='ingredients-item'>
              <img src={qua} alt="" />
              <h3>Ing 3</h3>
              <p>Something about this ingredient.</p>
            </div>
            <div className='ingredients-item'>
              <img src={qua} alt="" />
              <h3>Ing 4</h3>
              <p>Something about this ingredient.</p>
            </div>
            <div className='ingredients-item'>
              <img src={qua} alt="" />
              <h3>Ing 5</h3>
              <p>Something about this ingredient.</p>
            </div>
        </div>        
    </div>
  )
}

export default Ingredients

