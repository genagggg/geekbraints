import { useDispatch, useSelector } from "react-redux";


function App() {
  const posts = useSelector(state => state.posts)

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({
      type: 'delete',
      payload: id,
      meta: {
        delayMs: 5000
      }
    })
  }

  return (

    <div>
      {
        posts.map((post) => {
          return (
            <div key={post.id}>
              {post.title}
              <button onClick={() => handleDelete(posts.id)}>x</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
