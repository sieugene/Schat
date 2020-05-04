import React from 'react'
import TakeUserInfoInChat from './TakeUserInfoInChat';


const ChatBody = (props) => {
    return (
        <>
            {props.dialog[0].creator !== props.myId ?
                <TakeUserInfoInChat userId={props.dialog[0].creator}
                    {...props}
                />
                :
                <TakeUserInfoInChat userId={props.dialog[0].invited}
                    {...props}
                />
            }
        </>
    )
}

export default ChatBody