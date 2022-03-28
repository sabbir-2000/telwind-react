import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid';

const PriceBenefits = (props) => {
    return (
        <p className='flex ali'><CheckCircleIcon className='w-4 h-4 text-green-500 mr-2'></CheckCircleIcon>
            {props.benefit}
        </p>
    );
};

export default PriceBenefits;