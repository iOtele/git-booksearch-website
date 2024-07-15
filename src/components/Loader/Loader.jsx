import React from 'react'
import LoaderImg from '../../Images/Loader.svg'
import './Loader.css'

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img className="loader-img" src={LoaderImg} alt="Loader Image" />
    </div>
  )
}

export default Loader