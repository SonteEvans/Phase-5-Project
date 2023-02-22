import {useState} from "react"

function MissionForm({addMission}){
    const [missions, setMission] = useState([])
    const [missionData, setMissionData] = useState({
        title: "",
        description: "",
    });
    const [missionTitle, setMissionTitle] = useState("")
    const [missionDescription, setMissionDescription]
= useState("")
    function handleChange(event) {
        setMissionData({
            ...missionData,
            [event.target.title]: event.target.value,
            [event.target.description]: event.target.value,
        });
    }
    // function handleAddMisson(newMisison){
    //     setMission([...missions, newMisison])
    // }

    function handleSubmit(event) {
        event.preventDefault()
        setMissionData({title: missionTitle, description: missionDescription})
        const newMission = {
            title: missionTitle, description: missionDescription, game_id: 1
        }
    
    fetch("/missions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMission),
      })
        .then((r) => r.json())
        .then(addMission);
    }

    return (
            <form onSubmit={handleSubmit} className="add-mission-form">
            <h3>Squad Up!</h3>
            <input
             type="text"
             name="title"
             onChange={(e)=>setMissionTitle(e.target.value)}
             value={missionTitle}
             placeholder="Post a Mission..."
             className="input-text" />
             <br />
             <input 
             type="text"
             name="description"
             onChange={(e)=> setMissionDescription(e.target.value)}
             value={missionDescription}
             placeholder="What's our mission..."
             className="input-text"/>
             <br />
             <button>Create a New Mission</button>
            </form>

    )
}

export default MissionForm