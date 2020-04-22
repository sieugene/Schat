import React, { useState } from 'react'
import Message from './Message/Message';

const ChatBody = (props) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const sendingMessage = () => {
        const message = {
            body: '',
            createdAt: new Date(),
            uid: props.myId,
            messageType: 'text'
        }
        props.sendMessageTC(message, props.match.params.roomId)
    }
    ///
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
            <h3>Добро пожаловать в комнату</h3>
            {props.dialog ?
                props.dialog.map((r) => {
                    return <div key={r.id}>
                        <h3>Room id: {r.id}</h3>
                        <h4>Creator: {r.creator}</h4>
            Users: {r.Users}
                    </div>
                })
                :
                ''
            }
            <input onChange={handleChange} value={value} />
            <button onClick={sendingMessage}>Send message</button>
        </>
    )
}

export default ChatBody