
import GameList from "./GameList"
function GameSearch({games, search, setSearch}){
    
    function handleChange(event){
        setSearch(event.target.value)
    }
    // const mapGame = games.map(oneGame => {
    //     // return <GameCover key={oneGame.id} games={oneGame} />
    // })
    return(
        <div className="searchbar">
            <label htmlFor="search">Search</label>
            <input
              type="text"
              id="search"
              placeholder="Search.."
              value={search}
              onChange={handleChange}
            />
            {/* <ul className="game">{mapGame}</ul> */}
            <GameList games = {games}/>
        </div>

    )
}

export default GameSearch