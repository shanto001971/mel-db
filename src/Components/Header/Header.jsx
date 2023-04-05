import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-rose-200 px-20 p-4 shadow-xl rounded'>
            <div className="flex justify-between items-center gap-3  ">
                <img className='w-8 rounded-full' src="https://www.aiphotoof.me/_next/image?url=%2Fart%2Fvivid.png&w=3840&q=30" alt="" />
                <h1>
                    Spicy-Corner
                </h1>
            </div>
            <div className="flex justify-center items-center gap-3">
                <NavLink 
                
                to={'/Home'}
                className={({isActive})=> isActive? "underline":'' } >
                    Foods
                </NavLink>
                <NavLink 
                to={'/Foods-Detiles'}
                className={({isActive})=> isActive ? "underline":''}
                >
                    Foods-Detiles
                </NavLink>
                <NavLink
                className={({isActive})=> isActive ? "underline":''} 
                to={'/More-About-Foods'} >
                    More-About-Foods
                </NavLink>
            </div>
        </div>
    );
};

export default Header;