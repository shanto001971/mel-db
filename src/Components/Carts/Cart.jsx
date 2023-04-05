import React from 'react';

import { Link} from 'react-router-dom';

const Cart = (props) => {

    console.log(props.pd)

    const { strCategory, strCategoryThumb, strCategoryDescription,idCategory } = props.pd
    return (
        <div className='shadow-lg p-4 mt-5'>
            <div className="">
                <img src={strCategoryThumb} alt="" />
                <h1 
                title={strCategory}
                 className='font-extrabold text-lg'>
                    {strCategory}
                </h1>
                <p>
                    <small>{strCategoryDescription.substring(0, 200)} </small>
                </p>
                <button className='w-full p-2 mt-5 bg-orange-200 rounded hover:bg-orange-400'>
                <Link className=' ' to={ `/${idCategory}`}>
                More info
                </Link>
                </button>
            </div>
        </div>
    );
};

export default Cart;