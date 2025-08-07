import React, { useEffect, useState } from 'react'
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


    const [currentPage, setCurrentPage] = useState(1)
    const productPerPage = 8
    const totalpage = Math.ceil(allproducts?.length / productPerPage)
    const currentPageProductLastIndex = productPerPage * currentPage
    const currentPageProductFirstIndex = currentPageProductLastIndex - productPerPage
    const visibleALlProducts = allproducts.slice(currentPageProductFirstIndex, currentPageProductLastIndex)


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const navigatToNextPage = ()=>{
        if(currentPage!= totalpage){
            setCurrentPage(currentPage+1)
        }
    }

    const navigatToPrevPage = ()=>{
        if(currentPage!=1){
            setCurrentPage(currentPage-1)
        }
    }

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
                            <div className='grid grid-cols-4 gap-4 m-20'>
                                {/*  this is where we need to duplicate cards  so javascript is writiiten*/}

                                {


                                    allproducts?.length > 0 ?
                                        //show product
                                        visibleALlProducts?.map(products => (
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

                                        <div className='flex justify-center items-center font-bold text-red-400 text-3xl'>
                                            Product not found!!!!
                                        </div>
                                }


                            </div>

                            {/* pagination */}

                            <div  className='text-2xl text-center text-bold'>
                                <span  onClick={navigatToPrevPage}  className='cursor-pointer'><i className='fa-solid fa-backward me-5'></i></span>
                                <span >{currentPage} of {totalpage}</span>

                                <span onClick={navigatToNextPage}  className='cursor-pointer'><i className='fa-solid fa-forward me-5'></i></span>

                            </div>
                        </>


                }


            </div>
        </>
    )
}

export default Home