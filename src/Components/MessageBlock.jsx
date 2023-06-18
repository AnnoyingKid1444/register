import "../Styles/MessageBlock.css"
import Message from "./message";

export default function MessageBlock() {
    return(
        <div className="MessageBlock-Container">
        <h1>Полученные Сообщения</h1>
            <div className="MessageBlock">
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            </div>

        </div>

    )
}