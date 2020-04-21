import React from 'react'
import ModalCreateDialog from './ModalCreateDialog';



const CreateChatRoomTest = (props) => {
    return (
        <div>
            <h5>твой id: {props.myId}</h5>
            <ModalCreateDialog
                creatingChat={props.creatingChat}
                users={props.users}
            />
            <h2>Суммарно:</h2>
            {props.dialogs}

        </div>
    )
}


export default CreateChatRoomTest