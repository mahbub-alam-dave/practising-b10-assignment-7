import React from 'react';
import { GrFlagFill } from "react-icons/gr";

const Player = ({player, handleChoosePlayer}) => {
    return (
        <div className='border border-gray-200 p-4 rounded-xl'>
            <img className='max-w-350px w-full max-h-[250px] h-full rounded-xl' src={player.image} alt="" />
            <div className='mt-3 flex items-center gap-6'>
                <img className='w-8 h-8 rounded-[50%]' src={player.image} alt="" />
                <h2 className='font-semibold text-xl text-[rgba(19,19,19)]'>{player.name}</h2>
            </div>

            <div className='flex justify-between'>
            <div className='flex gap-4 items-center my-4'>
                <GrFlagFill />
                <p className='text-[rgba(19,19,19,0.7)]'>{player.nationality}</p>
                </div>
                <button className='btn text-[rgba(19,19,19,0.7)]'>{player.playingRole}</button>
            </div>
            <hr />
                <h3 className='my-4 text-[rgba(19,19,19)] font-semibold'>Rating <span>{player.rating}</span></h3>
            <div>
                    {
                        player.battingType && player.bowlingType ? <span className='text-base'>{player.battingType} and {player.bowlingType}</span> : 
                        
                        player.battingType ? <span>{player.battingType}</span> : 
                        
                        <span>{player.bowlingType}</span>
                    }
                </div> 

                <h3 className='font-semibold my-4'>Price $ {player.basePrice}</h3> 
                <button onClick={()=> handleChoosePlayer(player)} className='btn '>Choose Player</button>      

        </div>
    );
};

export default Player;