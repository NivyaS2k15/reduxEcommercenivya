import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  return (
    <>
    <Header  />

    <div style={{paddingTop:"100px" }}  className='container px-4 mx-auto'>

        <>
        <h1 className='text-4xl font-bold text-red-600'>My Wishlist </h1>
         <div className='grid grid-cols-4 gap-4 mt-2'>
                    {/* card duplicate */}
                    <div className='rounded border p-3 shadow'>

                        <img height={'200px'} width={'100%'} src="https://m.media-amazon.com/images/I/61fJzMoAj5L.jpg" alt="image" />
                        <div className='text-center'>
                            <h3 className='text-xl font-bold'>Product Name</h3>
                            <div  className='flex justify-evenly mt-3'>
                                <button className='text-xl text-red-500 font-bold'><i class="fa-solid fa-heart-circle-xmark"></i></button>
                                 <button className='text-xl text-green-600 font-bold'><i class="fa-solid fa-cart-plus"></i></button>
                            </div>
                        </div>
                    </div>

                </div>

        </>
    </div>
    
    </>
  )
}

export default Wishlist