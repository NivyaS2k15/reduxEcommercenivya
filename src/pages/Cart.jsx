import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <>
            <Header />
            <div style={{ paddingTop: '100px' }} className='px-5'>


                <>

                    <h1 className='text-5xl font-bold text-blue-600'>Cart Summary</h1>
                    <div className='grid grid-cols-3 gap-4 mt-5'>
                        <div className='col-span-2 border rounded p-5 shadow'>
                            <table className='table-auto w-full '>
                                <thead>
                                    <tr>
                                        <td className='font-semibold'>#</td>
                                        <td className='font-semibold'>Name</td>
                                        <td className='font-semibold'>Image</td>
                                        <td className='font-semibold'>Quantity</td>
                                        <td className='font-semibold'>Price</td>
                                        <td className='font-semibold'>...</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>product Name</td>
                                        <td> <img height={'70px'} width={'70px'} src="https://cdn.shopify.com/app-store/listing_images/2b9bba2ab61edabc6d836f14f9377671/icon/CL-Lhc30lu8CEAE=.png" alt="" /></td>
                                        <td>
                                            <div className='flex'>
                                                <button className='font-bold'>-</button>
                                                <input style={{ width: '40px' }} type="text" className='border p-1 rounded mx-2' value={2} readOnly />
                                                <button className='font-bold'>+</button>
                                            </div>
                                        </td>
                                        <td> $ 100 </td>
                                        <td> <button className='text-red-500'> <i class="fa-solid fa-trash"></i> </button></td>
                                    </tr>
                                </tbody>

                            </table>
                            <div className='float-right mt-5'>
                                <button className='bg-red-500 rounded p-2 text-white'>Empty cart</button>
                                <Link to={'/'} className='bg-blue-500 ms-3 rounded p-3 text-white'> Shop more..</Link>
                            </div>

                        </div>
                        <div className='col-span-1'>
                            <div className='border rounded shadow p-5'> 
                                <h2 className='text-2xl font-bold my-4'>Total Amount : <span  className='text-shadow-red-600'>$9.99</span> </h2>
                                <hr />
                                <button  className='bg-green-900 text-white mt-5 w-full text-2xl p-4'>check out </button>

                            </div>

                        </div>

                    </div>
                </>
            </div>
        </>
    )
}

export default Cart