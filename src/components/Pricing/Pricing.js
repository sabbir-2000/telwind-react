import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import PricingOption from '../PricingOptions/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'free', price: 0, benefits: ['lifetime free', 'fantastcik deals'] },
        { id: 2, name: 'regular', price: 10.21, benefits: ['lifetime free', 'fantastcik deals'] },
        { id: 3, name: 'premium', price: 99.07, benefits: ['lifetime free', 'fantastcik deals'] },

    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl text-white'>Best Deals of the Town</h1>
            <p>we are in one of our nation.so that we can see the wonder of science around us.science has linked up the distance up the work.we live in an age of science</p>
            <div className='grid md:grid-cols-3 gap-3 mt-6'>
                {
                    pricingOptions.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                }
            </div>
            <button className='bg-green-500  flex mt-2 justify-center w-full py-2 rounded mt-6 text-white hover:text-gray-700 font-bold'>Buy Now<ArrowRightIcon className='w-6 h-5'></ArrowRightIcon></button>
        </div>
    );
};

export default Pricing;