import {useState, useEffect} from "react"
import MissionCard from "./MissionCard"
import MissionForm from "react"

function Mission(){
    const [missions, setMission] = useState([])
    // console.log("whhhhy")

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
            <h2>Try Hard Missions</h2>
            {missionCard}
            {/* <MissionForm /> */}
        </div>
        

    )
}

export default Mission