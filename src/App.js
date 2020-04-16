import React from 'react';
import AuthPage from './components/Pages/Auth/AuthPage';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signOutThunkCreator } from './redux/authReducer';

function App(props) {
  return (
    <div className="wrapper">
      {props.firebaseAuth ? props.firebaseAuth.email : 'net'}
      <button onClick={props.signOutThunkCreator}>Sign out</button>
     <AuthPage/>
    </div>
  );
}

let mapStateToProps = (state) => {
  return{
    firebaseAuth: state.firebase.auth
  }
}
export default compose(connect(mapStateToProps,{
  signOutThunkCreator
}))(App);
