import React, { useEffect, useState } from 'react'
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] =useState([]);

    useEffect(()=>{
        fetch('Prices.json')
        .then(res => res.json())
        .then(data => setPrices(data));
    },[])
    

  return (
    <div className='md:px-10 py-4 '>
            <h2 className='text-center text-3xl py-3 text-white bg-purple-600 mb-5'>Awesome Afortable price</h2>
        <div className='grid md:grid-cols-3 gap-5 mx-10 md:mx-0'>
            {
                prices.map(price => <PriceCard
                key={price.id}
                plan={price}
                ></PriceCard> )
            }
        </div>
    </div>
  )
}

export default PriceList