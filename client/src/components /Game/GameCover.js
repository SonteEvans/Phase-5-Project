

function GameCover({games}){
    const {title, content, image} = games
    
    return(
    <div>
        <ul>  
        <h1>{title}</h1>
        <img src={image} />
        <h2>{content}</h2>
        </ul>
    </div>
    )
}

export default GameCover