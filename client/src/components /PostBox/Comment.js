import {useState, useEffect} from "react"
import CommentCard from './CommentCard'
import CommentForm from "./CommentForm"



function Comment (){ 
    const [comments, setComments] = useState([])
    // fetch("/comments")
    // .then((r) => {
    //     if(r.ok){
    //         r.json((comment) => console.log(comment))
    //     }
    // })

    useEffect(() => {
        fetch("/comments")
        .then(data => data.json())
        .then(data => setComments(data))
    }, [])

    const commentCard = comments.map((comment)=>(
        <CommentCard 
            comment = {comment}
            key = {comment.id}
        />
    ))

    return (
        <div className="main-container">
            <div className="comment-flexbox">
            {commentCard}
            <CommentForm />
            <h3 className="comment-text"></h3>
            <textarea className="input-box"/>
            <button>Post</button>
            </div>
        </div>
    )

}

export default Comment 