import React from 'react';

const Empty = ({goToMainPageBtn}) => {
    return (
        <div className='flex flex-col gap-6 justify-center items-center py-16'>
            <h2>You have no player selected...</h2>
            <button onClick={goToMainPageBtn} className='btn btn-secondary'>Choose Available Players</button>
        </div>
    );
};

export default Empty;