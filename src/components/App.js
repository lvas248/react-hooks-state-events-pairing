import react, { useState } from "react";
import video from "../data/video.js";
import CommentSection from "./CommentSection.js"


function App() {
  // console.log("Here's your data:", video);
  
  const [ upVote , setUpVote ] = useState(video.upvotes)
  const [ downVote , setDownVote ] = useState(video.downvotes)
  const [ hide, setHide] = useState(false)
  
  function handleClick(e){
    if(e.target.id === "up"){
      setUpVote(upVote + 1)
    }else{
      setDownVote(downVote - 1)
    }
  }

  function handleCommentClick(){
    setHide(!hide)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      
      <div>
        <button id="up" onClick={(e)=> handleClick(e)}>{upVote} 👍</button>
        <button id="down" onClick={(e) => handleClick(e)}>{downVote} 👎</button>
      </div>

      <button onClick={handleCommentClick}>{hide? "Show Comments" : "Hide Comments"}</button>
      <CommentSection hide={hide} comments={video.comments}/>
    </div>
  );
}

export default App;
