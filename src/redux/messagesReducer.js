const SEND_AUDIO_MESSAGE = 'MESSAGES/SEND_AUDIO_MESSAGE'

let initialState = {

}


const createChatReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }


}


export const sendAudioMessageAC = (message) => {
    return {
        type: SEND_AUDIO_MESSAGE,
        message
    }
}

export const sendAudioMessageTC = (file, myId, dialogId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const storageRef = firebase.storage().ref()
            //!!!!создать генерацию имени!!!!!!
        const fileRef = storageRef.child('dialogs/test.webm')
        return fileRef.put(file).then((response) => {
            console.log('отправка произошла, вот путь:', response.metadata.fullPath)
            debugger
            storageRef.child(response.metadata.fullPath).getDownloadURL().then((resp) => {
                debugger
                console.log('Ссылка на аудио:', resp)
                    //создание сообщения
                const message = {
                    body: resp,
                    createdAt: new Date(),
                    uid: myId,
                    messageType: 'audio'
                }
                dispatch(sendMessageTC(message, dialogId))
            })
        })
    }
}


export const sendMessageTC = (message, dialogId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection(`dialogs/${dialogId}/messages`).add({
            ...message
        }).then((resp) => {
            debugger
        }).catch((err) => {
            console.log(err)
            debugger

        })
    }
}

export default createChatReducer;