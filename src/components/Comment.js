function Comment({ user, comment, hide }){
    return (
        <div style={{display: hide?"none":""}}>
            <h3>{user}</h3>
            <p>{comment}</p>
        </div>
    )
}

export default Comment