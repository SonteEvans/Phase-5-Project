import {useState,useEffect} from "react"
import CommentCard from './CommentCard'
import CommentForm from "./CommentForm"



function Comment (){ 
    const [comment, setComment] = useState([])
    const [content, setContent] =useState("")
    const [moreContent, setMoreContent] = useState([])
    
    const onClickHandler = () => {
        setMoreContent((moreContent) => [...moreContent, content])
    }
    const onChangeHandler = (e) => {
        setContent(e.target.value)
    }



    useEffect(() => {
        fetch("/comments")
        .then(data => data.json())
        .then(data => setComment(data))
    }, []) 


    const commentCard = comment?.map((comment)=>(
        <CommentCard 
            comment = {comment}
            key = {comment.id}
        />
    ))

    return (
        <div className="main-container">
            {moreContent.map((text) => (
                <div className="comment-container">
                <h2>Your Post!</h2>
                <p>{text}</p>
            </div>
            ))}
            
            <div className="comment-flexbox">
            {/* <CommentForm /> */}
            <h3 className="comment-text">Write a Post</h3>
            <textarea 
            value={content}
            onChange={onChangeHandler}
            className="input-box"/>
            <button
             className="comment-button"
             onClick={onClickHandler}
             >Post</button>
            </div>
            <h2>Current Comments:</h2>
            {content}
        </div>
    )

}

export default Comment 