import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid'

const Product = ({ product }) => {
    console.log(product)
    const { strMealThumb, strMeal, strInstructions } = product
    return (
        <div className='border drop-shadow-md p-3 relative h-[650px]'>
            <img className='w-70 rounded' src={strMealThumb} alt="" />
            <h2 className='text-3xl py-4'>{strMeal.slice(0, 10)}</h2>
            <p>{strInstructions.slice(0, 250)}</p>
            <div className='w-full flex justify-center'>
                <button className='mx-4 py-3 px-4 bg-cyan-300 absolute bottom-2
            text-1xl text-white text-bold flex'>Add To Cart<ShoppingCartIcon className='w-6 h-6'></ShoppingCartIcon> </button>
            </div>
        </div>
    );
};

export default Product;