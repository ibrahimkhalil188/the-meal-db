import React from 'react';

const Header = () => {
    return (
        <div className='flex h-[80px] justify-between px-16 items-center'>
            <div>
                <h1 className='text-4xl font-bold font-mono'>THE-MEAL-DB</h1>
            </div>
            <div className='text-lg font-normal'>
                <a className='pr-4' href="/home">Home</a>
                <a className='pr-4' href="/home">Home</a>
                <a className='pr-4' href="/home">Home</a>
                <a className='pr-4' href="/home">Home</a>
            </div>
        </div>
    );
};

export default Header;