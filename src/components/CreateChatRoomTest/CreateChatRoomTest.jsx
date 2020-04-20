import React, { useState } from 'react'



const CreateChatRoomTest = (props) => {
    const [valueOption, setValueOption] = useState('');
    const [users, setUsers] = useState('')

    const handleChangeSearch = (e) => {
        if (e.target.value === '') {
            setUsers('');
        } else {
            const usersArray = props.users;
            let result = usersArray && usersArray.filter(function (val) {
                return (val.email + "").indexOf(e.target.value) !== -1;
            });
            setUsers(result);
        }
    }
    const handleChangeValueOption = (e) => {
        setValueOption(e.target.value)
        console.log('valueOption',valueOption)
    }
    const uidSelected = () => {
        const usersArray = props.users;
        let result = usersArray.filter((u) => {
            return u.email === valueOption
        })
        return result[0].id;
    }
    return (
        <div>
            <h5>твой id: {props.myId}</h5>
            <input onChange={handleChangeSearch} />
            {users.length >= 1 &&
                <select value={valueOption} onChange={handleChangeValueOption}>
                    <option value={''} selected  ></option>
                    {users && users.map((u) => {
                        return <option value={u.email} key={u.id}>{u.email}</option>
                    })}
                </select>
            }
            <br />
            <button onClick={() => { props.creatingChat(uidSelected()) }}>
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