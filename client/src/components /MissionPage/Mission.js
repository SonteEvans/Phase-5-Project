import {useState, useEffect} from "react"
import MissionCard from "./MissionCard"
import MissionForm from "react"

function Mission(){
    const [missions, setMission] = useState([])
    // const [partyList, setPartyList] = useState([])
    
    // const handleJoinParty = () => {
    //     setPartyList([...partyList,])
    // }

    // const handleLeaveParty = () => {
        
    // }
   

    useEffect(() => {
        fetch("/missions")
        .then(mission => mission.json())
        .then(mission => setMission(mission))
    }, [])
    
    const missionCard = missions.map((mission) => (
        <MissionCard 
          mission = {mission}
        />
    ))
    return (
        <div>
            {missionCard}
            <div>
                {/* <button type="button" className="add-btn" onClick={handleJoinParty}>
                    <span> Join Party</span>
                </button> */}
            </div>
            {/* <button type="button" classname="remove-btn" onCLick={handleLeaveParty}>
                <span>Leave Party</span>
            </button> */}
            {/* <MissionForm /> */}
        </div>
        

    )
}

export default Mission