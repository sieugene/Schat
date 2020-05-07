import React from 'react'
import Audio from './MessageType/Audio';
import './Message.scss'
import ImageMessage from './MessageType/ImageMessage';
import TextMessage from './MessageType/TextMessage';
import { checkManyOneDay } from '../../MessagesHelper/MessagesHelper';
const MessageType = (props) => {

    let content = '';
    if (props.messageType === 'img') {
        content = <ImageMessage image={props.message} title={props.title} />
    }
    if (props.messageType === 'text') {
        content = <TextMessage message={props.message} />
    }
    if (props.messageType === 'audio') {
        content = <Audio srcAudio={props.message} />
    }
    return (
        <div className='messageWrapper'>
            <div className='messagebody'>
                {content}
                <div className="messageDate">
                    <p>
                        {checkManyOneDay(props.createdAt)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MessageType