import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {

   const dispatch =  useDispatch()
   useEffect(()=>{
    dispatch(fetchProducts())
   },[])

    return (
        <>

            <Header insideHome={true} />
            <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>
                <div className='grid grid-cols-4 gap-4'>
                    {/* card duplicate */}
                    <div className='rounded border p-3 shadow'>

                        <img height={'200px'} width={'100%'} src="https://m.media-amazon.com/images/I/61fJzMoAj5L.jpg" alt="image" />
                        <div className='text-center'>
                            <h3 className='text-xl font-bold'>Product Name</h3>
                            <Link className='bg-violet-500 rounded p-1 mt-2 text-white inline-block' to={'/id/view'} >View More</Link>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home