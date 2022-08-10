import Comment from "./Comment"

function CommentSection({comments, hide}){
    const commentList = comments.map(comment =>{
        return <Comment hide={hide} key={comment.user} user={comment.user} comment={comment.comment}/>
    })
    return(
        <div>
            {commentList}
        </div>
    )
}


export default CommentSection