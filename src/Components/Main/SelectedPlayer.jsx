import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedPlayer = ({selectedPlayer, handleRemoveSelectedPlayer}) => {
    return (
        <div className='max-w-[1320px] w-full mx-auto border border-gray-200 rounded-2xl p-4 flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
                <img className='max-w-20 w-full h-16 rounded-lg' src={selectedPlayer.image} alt="" />
                <div className='flex flex-col gap-2 w-[250px]'>
                    <h3 className='text-2xl font-semibold text-[#131313]'>{selectedPlayer.name}</h3>
                    {
                        selectedPlayer.battingType && selectedPlayer.bowlingType ? <span className='text-base text-[rgba(19,19,19,0.6)]'>{selectedPlayer.battingType} and {selectedPlayer.bowlingType}</span> : 
                        
                        selectedPlayer.battingType ? 
                        <span className='text-base text-[rgba(19,19,19,0.6)]'>{selectedPlayer.battingType}</span> : 
                        
                        <span className='text-base text-[rgba(19,19,19,0.6)]'>{selectedPlayer.bowlingType}</span>
                    }
                </div>
            </div>

            <RiDeleteBin6Line onClick={() => handleRemoveSelectedPlayer(selectedPlayer)} className='mr-8'/>
            
        </div>
    );
};

export default SelectedPlayer;