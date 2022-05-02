import { useState, useEffect } from "react";
import PostCard from "./PostCard";

function Posts(props) {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    getPosts()
  }, [])

  let publishedPosts = posts.map((post) => {
    if (post.published === true) {
      return <PostCard  key={post._id} title={post.title} text={post.text} author={post.author} date={post.datetime} postId={post._id} setPost={props.setPost} postPath={props.postPath}/>
    } 
  })

  async function getPosts() {
    try {
      const response = await fetch('http://localhost:3000/users/626d810195d10f9c45fa091e/posts');
      const text = await response.text();
      const data = JSON.parse(text);
      setPosts(data)
    } catch(err) {
      return ('not')
    }
  }

  return (
    <div>
      <h1>Posts</h1>
      <div className="post-container">
      {publishedPosts}
      </div>
    </div>
  )
}


export default Posts