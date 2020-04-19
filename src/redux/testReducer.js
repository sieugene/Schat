import firebase from 'firebase'

export const startDialog = (uid, myId, allDialogs) => {
        return (dispatch, getState, { getFirebase, getFirestore }) => {
            const firestore = getFirestore();
            //проверка начинались ли диалоги у пользователей 
            const userIdIsStarted = allDialogs.filter((res) => {
                if (res.id === uid) {
                    if (res[myId]) {
                        if (res[myId].startedDialog === true)
                            return res[myId]
                    }
                } else {
                    return false
                }
            })
            const myIdIsStarted = allDialogs.filter((res) => {
                if (res.id === myId) {
                    if (res[uid]) {
                        if (res[uid].startedDialog === true)
                            return res[uid]
                    }
                } else {
                    return false
                }
            })
            const perform = userIdIsStarted.length === 0 || myIdIsStarted.length === 0;
            //возвращает true|false в зависимости от этого 
            //создаем у обоих отдельный массив с пользователем, в котром будет хранится
            //сам диалог
            if (perform) {
                firestore.collection('dialogs').doc(myId).set({
                    [uid]: {
                        startedDialog: true,
                        messages: []
                    }
                })
                firestore.collection('dialogs').doc(uid).set({
                    [myId]: {
                        startedDialog: true,
                        messages: []
                    }
                })

                .then((response) => {
                    debugger
                }).catch((err) => {
                    setTimeout(() => {}, 5000)
                })
            }
        }
    }
    ///get dialog with current user