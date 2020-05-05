import React, { useEffect} from 'react'
import { connect } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import Message from './Message/Message';
import UserAvatar from './UserAvatar/UserAvatar';
import { setCurrentChatUInfoUserTC, setCurrentChatUInfoMyInfoTC } from './../../../redux/dialogsReducer';
import { Spin } from 'antd';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';


const currentDialogUser = 'currentDialogUserInfo'

const TakeUserInfoInChat = (props) => {
    //беерем текущего пользователя из коллекции users
    useFirestoreConnect([
        {
            collection: 'users', doc: props.userId,
            storeAs: currentDialogUser
        }
    ])
    //добавляем в наш BLL, также в санке берем ссылку на его изображение
    useEffect(() => {
        if (props.currentDialogUserInfo) {
            props.currentDialogUserInfo[0] &&
                props.setCurrentChatUInfoUserTC(props.currentDialogUserInfo[0])
        }
        //очистка 
        return () => {
            props.setCurrentChatUInfoUserTC(undefined);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.currentDialogUserInfo])
    //добавляем информацию о себя
    useEffect(() => {
        if (props.profile.isLoaded) {
            props.setCurrentChatUInfoMyInfoTC(props.profile)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.profile.isLoaded])
    //все это будет храниться в одном массиве текущего чата с 
    //информацией обо мне и пользователе
    let alignMessage = (uid) => {
        if (props.myId === uid) {
            return 'flex-end'
        } else {
            return 'flex-start'
        }
    }
    //загружаем
    if (!props.currentChatUsersInfo.myinfo || !props.currentChatUsersInfo.userInfo) {
        return <Spin/>
    }
    //определение аватара
    const myAvatar = <UserAvatar photoURL={props.currentChatUsersInfo.myinfo.avatarLink} />;
    const userAvatar = <UserAvatar photoURL={props.currentChatUsersInfo.userInfo.avatarLink} />
    if(props.loadingData){
        return <Spin/>
    }
    return (
        <div>
            {props.messages && props.messages.length >= 1 ?
                props.messages.map((m) => {
                    return <Message alignMessage={alignMessage(m.uid)}
                        messageType={m.messageType}
                        message={m.body} key={m.id}
                        profile={props.profile}
                        userAvatar={userAvatar}
                        myAvatar={myAvatar}
                    />
                })
                :
                'no messages'
            }
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        currentDialogUserInfo: state.firestore.ordered[currentDialogUser],
        profile: state.firebase.profile,
        currentChatUsersInfo: state.filtDialogs.currentChatUsersInfo,
        loadingData: state.filtDialogs.loadingData
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
    setCurrentChatUInfoUserTC,
    setCurrentChatUInfoMyInfoTC
}))(TakeUserInfoInChat)