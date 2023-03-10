import React from 'react'
import './Card.css'
function Card({title,imageUrl,body}) {
  
  return (
    <div className='card-container'>
    <div className='image-container'>
        <img src={imageUrl} alt='' />
    </div>
    <div className='card-content'>
        <h4>{`$ ${title}`}</h4>
        <p>Widget Title</p>
        <div className='btn'>
            <button>
                <a>
                    View more
                </a>
            </button>
        </div>
    </div>
</div>


  )
}


export default Card