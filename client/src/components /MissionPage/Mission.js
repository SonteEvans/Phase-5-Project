import {useState, useEffect} from "react"
import MissionCard from "./MissionCard"


function Mission(){
    const [missions, setMission] = useState([])
   
    // function handleAddMisison(newMisison){
    //     setMission([...missions, newMisison])
    // }
   

    useEffect(() => {
        fetch("/missions")
        .then(mission => mission.json())
        .then(mission => setMission(mission))
    }, [])
    
    const missionCard = missions.map((mission) => (
        <MissionCard key={mission.id}
          mission = {mission}
        />
    ))
    return (
        <div> 
            {missionCard}
        </div>
        

    )
}

export default Mission