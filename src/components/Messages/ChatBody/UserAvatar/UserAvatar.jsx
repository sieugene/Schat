import React, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const UserAvatar = (props) => {
    const [myAvatar, setAvatar] = useState('');
    const firebase = useFirebase();
    if (props.user.photoURL) {
        const storageRef = firebase.storage().ref()
        storageRef.child(props.user.photoURL).getDownloadURL().then((resp) => {
            setAvatar(resp)
        })
    }
    return (
        <>
            <Avatar size={34} icon=
                {myAvatar.length !== '' ?
                    <img src={myAvatar} alt='myAvatar' />
                    :
                    <UserOutlined />
                }
            />
        </>
    )
}

export default UserAvatar