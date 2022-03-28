
import React from 'react';
import PriceBenefits from '../PriceBenefits/PriceBenefits';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl font bold'>{name}</h2>
            <p>
                <span className='text-5xl font-bold '>{price}</span>
                <span className='text-xl font-bold text-gray'>/Months</span>
            </p>
            <div>
                <h3 className='text-xl  text-left flex-items-center'>Benefits:</h3>
                {
                    benefits.map(benefit => <PriceBenefits benefit={benefit}></PriceBenefits>)

                }
            </div>

        </div>
    );
};

export default PricingOption;