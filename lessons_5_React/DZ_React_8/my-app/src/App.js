import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/reducer";

function App() {
  const users = useSelector(state => state.users);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [])


  const fetchUsers = () => {
    dispatch(getUsers())
  }


  if (loading) {
    return (
      <div>Is loading...</div>
    )
  }

  if (error) {
    return (
      <div>
        Is Error. Please try to <button onClick={fetchUsers}>repeat</button>
      </div>
    )
  }

  return (
    <div>
      {
        users.map((user) => {
          return (
            <div key={user.id}>
              {user.name}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
