import React, { useState } from 'react'



const CreateChatRoomTest = (props) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <h5>твой id: {props.myId}</h5>
            <input value={value}
                placeholder='введи id собеседника' onChange={handleChange} />
            <button
                onClick={() => {
                    props.creatingChat(value)
                }}
            >
                Создать чат
            </button>

            <h2>Суммарно:</h2>
            {props.dialogs}

            <br />
            <br />
            <br />
            <br />
        </div>
    )
}


export default CreateChatRoomTest