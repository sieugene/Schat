import React from 'react'
import Audio from './MessageType/Audio';
import './Message.scss'



const MessageType = (props) => { 
    let content = '';
    if (props.messageType === 'img') {
        content = <img src={props.message} />
    }
    if (props.messageType === 'text') {
        content = <p>{props.message}</p>
    }
    if (props.messageType === 'audio') {
        content = <Audio srcAudio={props.message}/>
    }
    return(
        <div className='messagebody'>
            {content}
        </div>
    )
}

export default MessageType