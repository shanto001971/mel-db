import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Drink from '../Drinks/Drink';

const FoodsDetiles = () => {
    const data = useLoaderData()
    const item =data.drinks
    return (
        <div className='grid lg:grid-cols-3 gap-5 mt-5'>
            {
                item.map(pd=><Drink key={pd.idDrink} pd={pd}></Drink>)
            }
        </div>
    );
};

export default FoodsDetiles;