import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'
import loadingimages from '../assets/loadingimage.gif'


const Home = () => {

    const dispatch = useDispatch()
    const { allproducts, loading, errorMsg } = useSelector(state => state.ProductReducer)
    console.log(allproducts, loading, errorMsg);
    console.log("errormesssss", errorMsg);


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>

            <Header insideHome={true} />
            <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>
                {/* card duplicate */}


                { // if its loading
                    loading ?
                        <div className='flex justify-center items-center my-5 text-lg'>
                            <img width={'700px'} height={'700px '} src={loadingimages} alt="" />
                            loading..............
                        </div>
                        :

                        // card
                        <>
                            <div className='grid grid-cols-4 gap-4'>
                                {/*  this is where we need to duplicate cards  so javascript is writiiten*/}

                                {


                                  allproducts?.length>0?
                                  //show product
                                  allproducts?.map(products=>(
                                     <div key={products?.id} className='rounded border p-3 shadow'>

                                        <img height={'200px'} width={'100%'} src={products.thumbnail} alt="image" />
                                        <div className='text-center'>
                                            <h3 className='text-xl font-bold'>{products.title}</h3>
                                            <Link className='bg-violet-500 rounded p-1 mt-2 text-white inline-block' to={`/${products?.id}/view`} >View More</Link>
                                        </div>
                                    </div>

                                  ))


                                   
                                    : 

                                    //else product not found

                                    <div  className='flex justify-center items-center font-bold text-red-400 text-3xl'>
                                        Product not found!!!!
                                    </div>
                                }


                            </div>
                        </>


                }

            </div>
        </>
    )
}

export default Home