import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Cart from '../Carts/Cart';
import Spinnsr from '../Spinner/Spinnsr';

const Home = () => {

    const navigation = useNavigation()

    if (navigation.state === 'loading') {
        return <Spinnsr/>
    }

    const data = useLoaderData()
    console.log(data)
     const item = data.categories
    return (
        
        <div className='grid lg:grid-cols-3 gap-5 '>
            {
                item.map(pd=><Cart key={pd.idCategory}
                pd={pd}
                ></Cart>)
            }
            <h1>
              
            </h1>
        </div>
    );
};

export default Home;