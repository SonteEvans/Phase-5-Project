import {useState, useEffect} from "react"
import PlayerPage from "../Home/PlayerPage"

function MissionCard({mission}) {
    const {title, description} = mission
    const [party, setParty] = useState([])
    const [partyList, setPartyList] = useState([])

    const handleJoinParty = () => {
        setPartyList([...partyList])
    }
   
    const handleLeaveParty = () => {
    
    }


useEffect(() => {
    fetch(`/missionparty/${mission.id}`)
    .then(group => group.json())
    .then(group => setParty(group))
}, [])

    return(
        <div>
            <h1>{title}</h1>
            <p> Mission: {description}</p>
            <button type="button" className="add-btn" onClick={handleJoinParty}>
                    <span> Join Party</span>
            </button>
            <div>
            <button type="button" className="remove-btn" onClick={handleLeaveParty}>
                <span>Leave Party</span>
            </button>
            </div>
            <p>{party[0]?.player.username}</p>
        </div>
    )
}

export default MissionCard