const SEND_AUDIO_MESSAGE = 'MESSAGES/SEND_AUDIO_MESSAGE'
const SET_IMG_PREVIEW = 'MESSAGES/SET_IMG_PREVIEW'
const SET_AUDIO_MESSAGE = 'MESSAGES/SET_AUDIO_MESSAGE'
const SET_IMG_FILE = 'MESSAGES/SET_IMG_FILE';
let initialState = {
    previewImg: null,
    audioRecording: false,
    imgFile: null
}


const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMG_PREVIEW:
            return {
                ...state,
                previewImg: action.previewImg
            }
        case SET_AUDIO_MESSAGE:
            return {
                ...state,
                audioRecording: action.audioRecording
            }
        case SET_IMG_FILE:
            return {
                ...state,
                imgFile: action.imgFile
            }
        default:
            return state
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
        const generateName = Date.now() + myId;
        const fileRef = storageRef.child(`dialogs/${generateName}.webm`)
        return fileRef.put(file).then((response) => {
            console.log('отправка произошла, вот путь:', response.metadata.fullPath)
            debugger
            const message = {
                body: response.metadata.fullPath,
                createdAt: new Date(),
                uid: myId,
                messageType: 'audio'
            }
            dispatch(sendMessageTC(message, dialogId))
        })
    }
}
export const sendImageMessageTC = (file, myId, dialogId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const storageRef = firebase.storage().ref()
        const generateName = Date.now() + myId + 'image';
        const fileRef = storageRef.child(`dialogs/${generateName}`)
        return fileRef.put(file).then((response) => {
            console.log('отправка произошла, вот путь:', response.metadata.fullPath)
            debugger
            const message = {
                body: response.metadata.fullPath,
                createdAt: new Date(),
                uid: myId,
                messageType: 'img'
            }
            dispatch(sendMessageTC(message, dialogId));
            dispatch(setImagePreviewUrlAC(null));
            dispatch(setImageFileAC(null))
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

//form events!
export const setImagePreviewUrlAC = (previewImg) => {
    return {
        type: SET_IMG_PREVIEW,
        previewImg
    }
}
export const setAudioMessageAC = (audioRecording) => {
    return {
        type: SET_AUDIO_MESSAGE,
        audioRecording
    }
}
export const setImageFileAC = (imgFile) => {
        return {
            type: SET_IMG_FILE,
            imgFile
        }
    }
    //

export default messagesReducer;