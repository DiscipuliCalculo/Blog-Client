import Comment from "./Comment";
import { useState, useEffect } from "react"

function CommentSection(props) {
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')

  useEffect(()=>{
    getComments()
}, [])

  let currentComments = comments.map((comment) => {
     return <Comment  key={comment._id} name={comment.name} text={comment.text} commentId={comment._id}/>
  })

  async function getComments() {
    try {
      const response = await fetch('http://localhost:3000/users/626d810195d10f9c45fa091e/posts/' + props.postId +'/comments', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const text = await response.text();
      const data = JSON.parse(text);
      console.log(data)
      setComments(data)
    } catch(err) {
      return ('not')
    }
  }

  async function addComment(e) {
    e.preventDefault()
    if (name === '' || commentText === ''){
      console.log('cant add comment')
    }
    else {
      const response = await fetch('http://localhost:3000/users/626d810195d10f9c45fa091e/posts/' + props.postId +'/comments', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
          'name': name,
          'text': commentText
        } ), // body data type must match "Content-Type" header
      });
      setName('')
      setCommentText('')
    }

  }

  return (
    <div>
      {currentComments}
      <div>
        <input type="text" onChange={e => setName(e.target.value)} value={name}/>
        <textarea onChange={e => setCommentText(e.target.value)} value={commentText}/>
        <button onClick={addComment}>Add Comment</button>
      </div>
    </div>
  )
}

export default CommentSection