import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShowContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);  // Fixed the typo

    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        if (products) {
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]);  // Added products in dependency array

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    This is a temporary text. Later, we will change the text, so don't worry.
                </p>
            </div>
            {/* Rendering products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.length > 0 ? (
                    latestProducts.map((item, index) => (
                        <ProductItem 
                            key={item._id || index}  // Prefer unique `_id` for key
                            id={item._id}
                            img={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">No products available</p>
                )}
            </div>
        </div>
    );
};

export default LatestCollection;
