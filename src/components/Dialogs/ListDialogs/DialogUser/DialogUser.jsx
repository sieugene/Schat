import React from 'react'
import ModalCreateDialog from '../../../Messages/ModalCreateDialog/ModalCreateDialog'






const DialogUser = (props) => {
    return (
        <div>
            <h5>твой id: {props.myId}</h5>
            <ModalCreateDialog
                creatingChat={props.creatingChat}
                users={props.users}/>
            {props.dialogs}
        </div>
    )
}


export default DialogUser