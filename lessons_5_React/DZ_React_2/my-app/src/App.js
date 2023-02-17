import './App.css';
import Message from './componets/Message';
import { useEffect, useState } from "react";

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    const author = target.author.value;
    const text = target.text.value;

    setMessageList(prevState => [
      ...prevState, {
        id: giveLastId(prevState),
        author: author,
        text: text
      }
    ])
  }

  function giveLastId(arr) {
    return arr.length ? arr[arr.length - 1].id + 1 : 0;
  }

  function botAnswer() {
    const lastAuthor = messageList[messageList.length - 1];
    if (lastAuthor && lastAuthor.author) {
      setMessageList(prevState => [
        ...prevState, {
          id: giveLastId(prevState),
          text: `Сообщение автора ${lastAuthor.author} отправлено`
        }
      ])
    }
  }

  useEffect(() => {
    setTimeout(() => {
      botAnswer()
    }, 2000)
  }, [messageList])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="author" />
        <input type="text" name="text" />
        <input type="submit" value="Отправить" />
      </form>
      {messageList.map((message) => {
        return (
          <div key={message.id}>
            {message.author && <p><span>Автор:</span>{message.author}</p>}
            <p>{message.author && <span>Текст:</span>}{message.text}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;