import { Route, Routes } from "react-router-dom";
import Chats from "./pages/Chats";
import Message from "./pages/Message";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Chats />} />
        <Route path={'/messages/:id'} element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
