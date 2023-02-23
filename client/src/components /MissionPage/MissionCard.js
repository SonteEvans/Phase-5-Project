import {useState, useEffect} from "react"
import PlayerPage from "../Home/PlayerPage"
import {Link} from "react-router-dom"

function MissionCard({mission, onDelete, onUpdate}) {
    const {id,title, description} = mission
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

function handleDelete(){
    fetch(`/missions/${id}`, {
        method: "DELETE",
    }).then((r) => {
        if (r.ok) {
            onDelete(mission)
        }
    })
}

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
            
            <button><Link to={`/missions/${mission.id}`}>New Mission</Link></button>
            <button onClick={handleDelete}>Delete Mission</button>
          
        </div>
    )
}

export default MissionCard