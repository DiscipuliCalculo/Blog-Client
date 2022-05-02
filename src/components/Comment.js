
function Comment(props) {
  return (
    <div className="comment">
      <p>{props.name}</p>
      <p>{props.text}</p>
    </div>
  )
}

export default Comment