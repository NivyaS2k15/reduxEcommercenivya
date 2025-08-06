import React from 'react'
import Header from '../components/Header'


const View = () => {
  return (
   <>
   <Header/>
   <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2 items-center h-screen'>
       <img height={'400px'} width={'400px'} src="https://b3681537.smushcdn.com/3681537/wp-content/uploads/2025/07/spices-shop-kochi.jpg?lossy=2&strip=1&webp=1" alt="inmg" />

       <div>
        <h3 className='font-bold'>PD : id </h3>
        <h1 className='text-5xl font-bold'>Product Name</h1>
        <h4>$ 250</h4>
        <h4>Brand : brand</h4>
        <h4>Category : category</h4>
        <p>
            <span className='font-bold'>Description</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aliquid? Beatae iure quaerat suscipit repellendus nesciunt eius consectetur et autem facere quibusdam impedit aut, vero accusamus placeat nobis distinctio asperiores!
            <div className='flex justify-between mt-4'>
                <button className='bg-blue-600 text-white p-2 rounded-xl'>Add to wishlist</button>
                <button className='bg-green-800 text-white p-3 rounded-xl'>Add to Cart</button>
            </div>
        </p>
       </div>
      </div>
   </div>
   </>

  )
}

export default View