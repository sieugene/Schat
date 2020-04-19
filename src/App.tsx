import React from 'react';
import AuthPage from './components/Pages/Auth/AuthPage';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signOutThunkCreator } from './redux/authReducer';
import { AppStateType } from './redux/store';
import { FirebaseReducer } from 'react-redux-firebase';
import Chat from './components/Pages/Chat/Chat';
import { Route } from 'react-router-dom';
import TestComponent from './components/Pages/TestComponent/TestComponent';


type mapStateType = {
  firebaseAuth: FirebaseReducer.AuthState
}
type mapDispatchType = {
  signOutThunkCreator: () => void
}
type PropsType = mapStateType & mapDispatchType
const App:React.FC<PropsType> = (props) => {
  return (
    <div className="wrapper">
      <Route exact path='/test' render={() => (<TestComponent/>)}/>
      <Route exact path='/chat' render={() => (<Chat/>)}/>
      {props.firebaseAuth ? props.firebaseAuth.email : 'net'}
      <button onClick={props.signOutThunkCreator}>Sign out</button>
     <AuthPage/>
    </div>
  );
}

let mapStateToProps = (state:AppStateType):mapStateType => {
  return{
    firebaseAuth: state.firebase.auth
  }
}
export default compose(connect(mapStateToProps,{
  signOutThunkCreator
}))(App);
