import React from 'react'
import Message from './Message/Message';

const ChatBody = (props) => {
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
        </>
    )
}

export default ChatBody