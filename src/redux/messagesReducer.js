let initialState = {

}


const createChatReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
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