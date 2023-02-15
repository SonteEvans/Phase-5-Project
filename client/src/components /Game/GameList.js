import GameCover from "./GameCover"

function GameList({games}){
    
  
    const mapGames = games.map(oneGame => {
        return <GameCover key={oneGame.id} games={oneGame}/>
    })
    return(
        <ul className="cover">{mapGames}</ul>
    )
}
export default GameList