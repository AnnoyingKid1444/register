import "./Styles/App.css";
import MessageBlock from "./Components/MessageBlock";
import {Routes, Route} from 'react-router-dom';
import SendMessage from "./Components/SendMessage";
import MessageForm from "./Components/MessageForm";
import Bgimg from "./img/YTIT.9cdba6f960dcfb10da0c.png";
function App() {

  return (
    <div className="App">

      <img src={Bgimg} alt="" className="bgImg"/>
            <Routes>
            <Route path="/" element={<SendMessage/>} />
            <Route path="/MessageForm" element={<MessageForm />} />
            </Routes>

            {/* <MessageBlock/> */}

    </div>
  );
}

export default App;
