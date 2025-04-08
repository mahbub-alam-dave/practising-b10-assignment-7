import { useState } from "react"
import Banner from "./Components/Banner/Banner"
import Footer from "./Components/Footer/Footer"
import Newsletter from "./Components/Footer/Newsletter"
import Main from "./Components/Main/Main"
import Navbar from "./Components/Navbar/Navbar"

function App() {
const [claimCoins, setClaimCoins] = useState(0);
const [selectedPlayers, setSelectedPlayers] = useState([]);
const [countPlayers, setCountPlayers] = useState(0)
const [alert, setAlert] = useState(false)

const handleClaimCreditBtn = () => {
    const newClaimCoins = claimCoins + 100000
    setClaimCoins(newClaimCoins)
  }

const handleChoosePlayer = (player) => {
  const checkSelected =  selectedPlayers.find(selectedPlayer => selectedPlayer.id === player.id)
  
  
  if(!checkSelected) {

    if(selectedPlayers.length < 6) {
      if(claimCoins > player.basePrice) {
        const newSelectedPlayers = [...selectedPlayers, player]
        setSelectedPlayers(newSelectedPlayers);
        setClaimCoins(claimCoins - player.basePrice)
        setCountPlayers(c => c + 1);
        }
    
        else {
          window.alert("You haven't enough coins to chosse " + player.name)
          setAlert(true)
        }
    }

    else {
      setAlert(true)
    }
  }

  else {
    setAlert(true)
    window.alert(player.name + " " + "is already selected");
    return
  }

}




  return (
    <>
    <Navbar claimCoins={claimCoins}></Navbar>
    <Banner handleClaimCreditBtn={handleClaimCreditBtn}></Banner>
    <Main 
         handleChoosePlayer={handleChoosePlayer} 
         selectedPlayers={selectedPlayers} 
         setSelectedPlayers={setSelectedPlayers}
         countPlayers={countPlayers}
         setCountPlayers={setCountPlayers}>
         </Main>
    <Newsletter></Newsletter>
    <Footer></Footer>

    </>
  )
}

export default App
