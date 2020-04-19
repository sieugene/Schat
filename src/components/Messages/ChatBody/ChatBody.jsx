import React from 'react'
import Message from './Message/Message';

const ChatBody = (props) => {
    let messageType = 'img'
    let message = 'https://avatars.mds.yandex.net/get-pdb/812271/3dfbb5ad-744e-4642-8b07-8ad07d847c84/s1200'
    let profileUid = 1;
    let id = 1;
    let alignMessage = profileUid === id ? 'flex-end' : 'flex-start';
    return (
        <>
            <Message alignMessage={alignMessage} messageType={messageType}
                message={message}
            />
            <Message alignMessage={alignMessage} messageType={messageType}
                message={message}
            />
            <Message alignMessage={alignMessage} messageType={messageType}
                message={message}
            />
            <Message alignMessage={'flex-start'} messageType={messageType}
                message={message}
            />
            <Message alignMessage={alignMessage} messageType={'text'}
                message={message}
            />
            <Message alignMessage={'flex-start'} messageType={'text'}
                message={message}
            />
            <Message alignMessage={alignMessage} messageType={messageType}
                message={message}
            />
        </>
    )
}

export default ChatBody