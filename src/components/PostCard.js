import { useNavigate } from "react-router-dom"

function PostCard(props) {

  const navigate = useNavigate();

  function getPost(){
    props.setPost(props.postId)
    navigate('/posts/' + props.postId, 
    {state:
      {postId: props.postId, 
      title: props.text,
      text: props.text,
      author: props.author,
      date: props.date
     }});
  }

  return (
    <div className="post-card" onClick={getPost}>
      <h4>{props.title}</h4>
      <p>{props.date}</p>
    </div>
  )
}

export default PostCard