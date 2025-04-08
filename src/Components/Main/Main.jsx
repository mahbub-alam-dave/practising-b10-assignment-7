import React, { useEffect, useState } from 'react';
import Player from './Player';
import SelectedPlayer from './SelectedPlayer';
import Empty from './Empty';

const Main = ({handleChoosePlayer, selectedPlayers, setSelectedPlayers, countPlayers, setCountPlayers}) => {
    
    const [players, setPlayers] =  useState([]);
    const [displaySelected, setDisplaySelected] = useState(false);
    const [empty, setEmpty] = useState(true);
    
    
    useEffect(()=>{
        fetch("players.json").then(res => res.json()).then(data => setPlayers(data))
    }, [])

    const handleSelectedPlayersBtn = () => {

        setDisplaySelected(true)
        if(selectedPlayers.length === 0) {
            setEmpty(true)
        }
        else setEmpty(false)
        
        document.getElementById('selected').classList.add("bg-yellow-400")
        document.getElementById('selected').classList.replace("text-[rgba(19,19,19,0.6)]", "text-[rgba(19,19,19)]")
        document.getElementById("available").classList.remove("bg-yellow-400")
        document.getElementById("available").classList.add("text-[rgba(19,19,19,0.6)]")
    }

    const handleAvailablePlayersBtn = () => {
        setDisplaySelected(false)
        document.getElementById("available").classList.add("bg-yellow-400");
        document.getElementById('selected').classList.remove("bg-yellow-400");
        document.getElementById('selected').classList.replace("text-[rgba(19,19,19)]", "text-[rgba(19,19,19,0.6)]");
        document.getElementById("available").classList.remove("text-[rgba(19,19,19,0.6)]")

    }

    const handleRemoveSelectedPlayer = (selectedPlayer) => {
        const newSelectedPlayers = selectedPlayers.filter(allPlayer => allPlayer.id !== selectedPlayer.id);
        setSelectedPlayers(newSelectedPlayers)
        setCountPlayers(c => c - 1)
        if(selectedPlayers.length === 1) {
            setEmpty(true)
        }
    } 

    const goToMainPageBtn = () =>{
        setDisplaySelected(false)
        document.getElementById("available").classList.add("bg-yellow-400");
        document.getElementById('selected').classList.remove("bg-yellow-400");
        document.getElementById('selected').classList.replace("text-[rgba(19,19,19)]", "text-[rgba(19,19,19,0.6)]");
        document.getElementById("available").classList.remove("text-[rgba(19,19,19,0.6)]");
    }

    const chooseMorePlayers = () => {
        setDisplaySelected(false)
        document.getElementById("available").classList.add("bg-yellow-400");
        document.getElementById('selected').classList.remove("bg-yellow-400");
        document.getElementById('selected').classList.replace("text-[rgba(19,19,19)]", "text-[rgba(19,19,19,0.6)]");
        document.getElementById("available").classList.remove("text-[rgba(19,19,19,0.6)]");
    }

    return (
        <div  className='max-w-[1320px] w-full mx-auto mt-20'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold'>Available Players</h2>
                <div className='border border-gray-200 rounded-lg flex items-center'>
                    <div onClick={handleAvailablePlayersBtn} id='available' className='bg-yellow-400 py-2 px-3 rounded-tl-lg font-semibold rounded-bl-lg '>Available</div>
                    <div onClick={handleSelectedPlayersBtn} id='selected' className='py-2 px-3 text-[rgba(19,19,19,0.6)] font-semibold'>Selected ({selectedPlayers.length})</div>
                </div>
            </div>



            {
                displaySelected ?        

                <div>
                    {
                        empty ? <Empty goToMainPageBtn={goToMainPageBtn}></Empty> :
                        
                        
                    <div className='mt-12 flex flex-col gap-6'>
                        {
                            selectedPlayers.map(selectedPlayer => <SelectedPlayer key={selectedPlayer.id}
                                                                                  selectedPlayer={selectedPlayer}
                                                                                  handleRemoveSelectedPlayer={handleRemoveSelectedPlayer}
                                                                                 ></SelectedPlayer>)
                        }
                        {
                            countPlayers < 6 ? 
                            <div className='mx-auto'>
                            <button onClick={chooseMorePlayers} className='btn btn-outline'>Choose More Players</button>
                            </div> 
                            : ""
                        }
                    </div> 
                    }
                </div>
            
             :    
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 '>
                {
                    players.map(player => <Player key={player.id}
                                                      player={player}
                                                      handleChoosePlayer={handleChoosePlayer}
                                                      ></Player>)
                }
                
            </div> 
            }


        </div>
    );
};

export default Main;