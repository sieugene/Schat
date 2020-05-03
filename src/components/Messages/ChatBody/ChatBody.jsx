import React from 'react'
import Message from './Message/Message';
import UserAvatar from './UserAvatar/UserAvatar';


const ChatBody = (props) => {
    const alignMessage = (uid) => {
        if (props.myId === uid) {
            return 'flex-end'
        } else {
            return 'flex-start'
        }
    }
    const takeAvatar = (uid) => {
        if (props.myId !== uid) {
            let res = props.users.filter((u) => {
                return u.id === uid
            })
            return <UserAvatar user={res[0]} />
        }
    }
    return (
        <>
            {props.messages && props.messages.length >= 1 ?
                props.messages.map((m) => {
                    return <Message alignMessage={alignMessage(m.uid)}
                        messageType={m.messageType}
                        message={m.body} key={m.id}
                        profile={props.profile}
                        userAvatar={takeAvatar(m.uid)}
                        myAvatar={<UserAvatar user={props.profile} />}
                    />
                })
                :
                'no messages'
            }
        </>
    )
}

export default ChatBody