export const createChatRoom = (userId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();

        firestore.collection('rooms').add({
            Users: 0,
            creator: userId
        }).then((resp) => {
            debugger
        })

    }
}