import { messages } from "./data";
import Messages from './messages';

function MessageList() {



    return (
        <div>
            {messages.map((message) => <Messages key={message.id} {...message} />)}
        </div>
    );
}

export default MessageList;