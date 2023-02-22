function Logout({player,setUser}) {

function handleLogOut(){
    fetch("/logout", {
        method: "DELETE"
    })
    .then((r) => {
        if(r.ok){
            setUser(null)
        }
    })}
    return (
        <button onClick={handleLogOut}>Logout</button>
    )
}
export default Logout