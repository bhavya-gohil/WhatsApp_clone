import React,{ useState, useEffect } from 'react';
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(("You typed >>>", input));

        setInput("");
    }

    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h1>Room name</h1>
                    <p>Last seen ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>

            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}>
                    <span className="chat__name">
                    Rick
                    </span>
                    Hey man
                    <span className="chat__timestamp">
                        12:50pm
                    </span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />

                    <form>
                        <input value={input} onChange = {e => setInput(e.target.value)} type="text" placeholder="Type a message" />
                        <button onClick={sendMessage} type="submit">Send Message</button>
                    </form>

                <MicIcon />
            </div>

        </div>
    )
}

export default Chat
