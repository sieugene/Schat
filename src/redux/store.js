import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { firebaseReducer, getFirebase } from "react-redux-firebase";
import fbConfig from './../config/fbConfig'
import firebase from 'firebase/app'
import { createFirestoreInstance, firestoreReducer, getFirestore, reduxFirestore } from "redux-firestore";
import authReducer from "./authReducer";



let reducers = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})


const rrfConfig = {
    userProfile: 'users', // where profiles are stored in database
    presence: 'presence', // where list of online users is stored in database
    sessions: 'sessions', // where list of user sessions is stored in database (presence must be enabled)
    useFirestoreForProfile: true
}
let store = createStore(reducers,
    compose(applyMiddleware(thunkMiddleware.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(fbConfig, rrfConfig)
    )
);

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

window.store = store;

export default store