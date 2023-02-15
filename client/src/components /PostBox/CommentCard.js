
function CommentCard({comment}){
    console.log(comment)
    return(
        <div>
            <p>Player id: {comment.player_id}</p>
        </div>
    )
}

export default CommentCard