import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const View = () => {

  // const params = useParams()
  // console.log(params); ...> this will give pid =18

  const { id } = useParams()
  console.log(id);
  const { allproducts } = useSelector(state => state.ProductReducer)
  console.log("view products", allproducts);
  //product state defined
  const [product, setProduct] = useState({})

  useEffect(() => {
    if (sessionStorage.getItem("allproducts")) {
      const allproducts = JSON.parse(sessionStorage.getItem("allproducts"))
      console.log(allproducts.find(item => item.id == id));
      setProduct(allproducts.find(item => item.id == id))
    }


  }, [])



  console.log("setptoduct", product);


  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }}>
        <div className='flex flex-col mx-5'>
          <div className='grid grid-cols-2 items-center h-screen'>
          <div>
              <img height={'400px'} width={'400px'} src={product?.thumbnail} alt="inmg" />
               <div className='flex justify-evenly items-end mt-4'>
                    <button className='bg-blue-600 text-white p-2 rounded-xl'>Add to wishlist</button>
                    <button className='bg-green-800 text-white p-3 rounded-xl'>Add to Cart</button>
                  </div>
          </div>
            <div>
              <h3 className='font-bold'>PD : {product.id} </h3>
              <h1 className='text-5xl font-bold'>{product.title}</h1>
              <h4>$ {product.price}</h4>
              <h4>Brand : {product.brand}</h4>
              <h4>Category : {product.category}</h4>
              <div>
                <p>
                  <span className='font-bold'>Description</span> {product.description}
                </p>
                
              </div>
              <h3 className='font-bold  my-5 text-xl'>Client Reviews</h3>
              {
                product?.reviews?.length > 0 ?
                  product?.reviews.map(item => (
                    <div key={item?.data} className='shadow-border p-2 mb-2'>
                      <h5>
                        <span className='font-bold'>{item?.reviewerName}</span> : <span>{item?.comment}</span>
                      </h5>

                      <p>
                        Rating :
                        {[...Array(item?.rating)].map((_, index) => (
                          <i key={index} className='fa-solid fa-star text-yellow-500 ml-1'></i>
                        ))}
                      </p>

                    </div>
                  ))
                  :
                  <div>No reviews yet !!!!</div>
              }
            </div>




          </div>
        </div>
      </div>
    </>

  )
}

export default View