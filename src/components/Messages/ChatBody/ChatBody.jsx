import React, { useState } from 'react'
import Message from './Message/Message';

const ChatBody = (props) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const sendingMessage = () => {
        const message = {
            body: value,
            createdAt: new Date(),
            uid: props.myId,
            messageType: 'text'
        }
        props.sendMessageTC(message, props.roomId)
    }
    ///
    const alignMessage = (uid) => {
        if(props.myId === uid){
            return 'flex-end'
        }else{
            return 'flex-start'
        }
    }
    return (
        <>
            {props.messages && props.messages.length >= 2 ?
                props.messages.map((m) => {
                    return <Message alignMessage={alignMessage(m.uid)} 
                    messageType={m.messageType}
                        message={m.body} key={m.id} />
                })
                :
                'no messages'
            }
            <input onChange={handleChange} value={value} />
            <button onClick={sendingMessage}>Send message</button>
        </>
    )
}

export default ChatBody