import './App.css';
import Message from './componets/Message';

function App() {
  const someText = 'Произвольный текст для отображения';
  return (
    <div className="App">
      <Message someText={someText} />
    </div>
  );
}

export default App;
