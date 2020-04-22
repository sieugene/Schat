import React from 'react'

const DialogUser = (props) => {
    return (
        <div>
            <h5>твой id: {props.myId}</h5>
            {props.dialogs}
        </div>
    )
}


export default DialogUser