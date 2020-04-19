import firebase from 'firebase'

const IS_LOADED = 'IS_LOADED'
const SET_ERRORS_SIGN_IN = 'SET_ERRORS'
const SET_ERRORS_SIGN_UP = 'SET_ERRORS_SIGN_UP'

let initialState = {
    isLoaded: false,
    errors: {
        errorsSignIn: [],
        errorsSignUp: []
    }
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADED:
            {
                return {
                    ...state,
                    isLoaded: action.load
                }
            }
        case SET_ERRORS_SIGN_IN:
            {
                return {
                    ...state,
                    errors: {...state.errors, errorsSignIn: action.err }
                }
            }
        case SET_ERRORS_SIGN_UP:
            {
                return {
                    ...state,
                    errors: {...state.errors, errorsSignUp: action.err }
                }
            }
        default:
            return state
    }
}

const toggleLoadingAC = (load) => {
    return {
        type: IS_LOADED,
        load
    }
}
const setErrorsSignInAC = (err) => {
    return {
        type: SET_ERRORS_SIGN_IN,
        err
    }
}
export const setErrorsSignUpAC = (err) => {
    return {
        type: SET_ERRORS_SIGN_UP,
        err
    }
}
export const authThunkCreator = (credentials) => {
    return (dispatch, getFirebase) => {
        dispatch(toggleLoadingAC(true));
        return firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((response) => {
            console.log('Auth success')
            dispatch(toggleLoadingAC(false))
        }).catch((err) => {
            console.log('Some errors in auth')
            dispatch(toggleLoadingAC(false))
            dispatch(setErrorsSignInAC(err))
            setTimeout(() => {
                dispatch(setErrorsSignInAC([]))
            }, 5000)
        })
    }
}
export const signOutThunkCreator = () => (dispatch) => {
    firebase.auth().signOut().then(() => {
        console.log('Sign out Success')
    }).catch(() => {
        console.log('Sign out Errors')
    })
}

export const signUpThunkCreator = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch(toggleLoadingAC(true));
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then((response) => {
            firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                photoURL: '',
                createdAt: new Date()
            })
            firestore.collection('dialogs').doc(response.user.uid).set({})
        }).then((response) => {
            dispatch(toggleLoadingAC(false));
        }).catch((err) => {
            dispatch(setErrorsSignUpAC(err))
            dispatch(toggleLoadingAC(false));
            setTimeout(() => {
                dispatch(setErrorsSignUpAC([]))
            }, 5000)
        })
    }
}

////test
export const startDialog = (uid, myId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch(toggleLoadingAC(true));
        const firestore = getFirestore();
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
                dispatch(toggleLoadingAC(false));
            }).catch((err) => {
                dispatch(setErrorsSignUpAC(err))
                dispatch(toggleLoadingAC(false));
                setTimeout(() => {
                    dispatch(setErrorsSignUpAC([]))
                }, 5000)
            })
    }
}





export default authReducer