import React from 'react'
import "./FloatingDiv.css";
const FloatingDiv = ({image, tx1, tx2}) => {
  return (
    <div className='floatingdiv' >
        <img src={image} alt="" />
        <span>
            {tx1}
            <br/>
            {tx2}
        </span>
    </div>
  )
}

export default FloatingDiv; 