import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostDetail from "./PostDetail";
import Posts from "./Posts";


const RouteSwitch = () => {
  const [post, setPost] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/posts" element={<Posts setPost={setPost} postPath={post} />} />
          <Route path={'/posts/' + post} element={<PostDetail />}/>
      </Routes>
    </BrowserRouter>
  )

}

export default RouteSwitch