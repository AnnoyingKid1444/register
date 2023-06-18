import "./Styles/App.css";
import MessageBlock from "./Components/MessageBlock";
import {Routes, Route} from 'react-router-dom';
import SendMessage from "./Components/SendMessage";
import MessageForm from "./Components/MessageForm";
function App() {

  return (
    <div className="App">

            {/* <Routes>
            <Route path="/" element={<SendMessage/>} />
            <Route path="/MessageForm" element={<MessageForm />} />
            </Routes> */}

            <MessageBlock/>

    </div>
  );
}

export default App;
