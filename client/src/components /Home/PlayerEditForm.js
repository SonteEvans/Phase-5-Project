import {useState} from "react"

function PlayerEditForm({player, setUser}) {
    const [username, setUsename] = useState(player.username)
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        
        const newUser ={
            username: username, password: password}
        fetch(`/players/${player.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(newUser)
        })
        .then(()=> {setUser(newUser)})
    }
    
    return(
        <form onSubmit = {handleSubmit}>
            <label><b>Username</b></label>
            <input type="text"value={username} onChange={(e)=> setUsename(e.target.value)}></input>
            <label><b>Password</b></label>
            <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
            <button>Update Profile</button>
        </form>

    )
}

export default PlayerEditForm