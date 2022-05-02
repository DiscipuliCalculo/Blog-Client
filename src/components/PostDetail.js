import { useNavigate, useLocation } from 'react-router-dom'
import CommentSection from './CommentSection';

function PostDetail(props){

  const location = useLocation();

  return (
    <div>
      <h1>{location.state.title}</h1>
      <p>{location.state.text}</p>
      <CommentSection postId={location.state.postId}/>
    </div>
  )
}

export default PostDetail