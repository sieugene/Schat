export const createChatRoom = (myId, userId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('dialogs').add({
            Users: 0,
            creator: myId,
            invited: userId
        }).then((resp) => {})

    }
}