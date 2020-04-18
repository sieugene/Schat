import React from 'react'
import Audio from './MessageType/Audio';




const MessageType = (props) => {

    if (props.messageType === 'img') {
        return <img src={props.message} />
    }
    if (props.messageType === 'text') {
        return <p>{props.message}</p>
    }
    if (props.messageType === 'audio') {
        return <Audio />
    }
}

export default MessageType