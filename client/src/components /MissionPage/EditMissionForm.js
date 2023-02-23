import {useState} from "react"

function EditMissionForm({mission}){
    const {id} = mission
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault();
        
        const newMission ={
            title: title, description: description}
        fetch(`/missions/${mission.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(newMission)
        })
        .then((r)=> r.json())
    }
    return (
        <form onSubmit = {handleSubmit}>
            <label><b>Title</b></label>
            <input type="text"value={title} onChange={(e)=> setTitle(e.target.value)}></input>
            <label><b>Description</b></label>
            <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)}></input>
            <button>Update Mission</button>
        </form>
    )
}

export default EditMissionForm