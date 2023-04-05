import React from 'react';

const Drink = ({pd}) => {
    const {strCategory,strDrink,strDrinkThumb,strIBA,strInstructionsDE}=pd
    return (
        <div>
            <div className="">
                <img src={strDrinkThumb} alt="" />
                <h1
                title={strDrink}
                className='text-2xl'
                >
                    {
                        strDrink
                    }
                </h1>
                <small>
                    {
                        strCategory
                    }
                </small>
                <p>
                    {strInstructionsDE ?strInstructionsDE.slice(0,200) :''}
                </p>
                <small>
                    {
                        strIBA
                    }
                </small>
            </div>
        </div>
    );
};

export default Drink;