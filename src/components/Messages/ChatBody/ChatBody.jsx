import React from 'react'
import Message from './Message/Message';

const ChatBody = (props) => {
    let profileUid = 1;
    let id = 1;
    let alignMessage = profileUid === id ? 'flex-end' : 'flex-start';
    return(
        <Message alignMessage={alignMessage}/>
    )
}

export default ChatBody