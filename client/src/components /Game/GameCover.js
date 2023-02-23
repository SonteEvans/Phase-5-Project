

function GameCover({games}){
    const {title, content, image} = games
    
    return(
    <div class="text-center">
        <ul>  
        <h1>{title}</h1>
        <img src={image} class="rounded mx-auto d-block" />
        <h2>{content}</h2>
        </ul>
    </div>
    )
}

export default GameCover