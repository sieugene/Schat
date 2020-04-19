import React from 'react';

import { useFirebaseConnect, useFirestoreConnect } from 'react-redux-firebase';
import { connect, useSelector } from 'react-redux';
import { startDialog } from './../../../redux/testReducer';


const TestComponent = (props) => {
    //to view online users
    useFirebaseConnect('presence')
    let currentUserId = '1';
    useFirestoreConnect([
        { collection: 'dialogs', doc: currentUserId } // or 'todos'
    ])
    useFirestoreConnect([
        { collection: 'users' } // or 'todos'
    ])

    useFirestoreConnect([
        { collection: 'dialogs' } // or 'todos'
      ])
      const allDialogs = useSelector(state => state.firestore.ordered.dialogs)



    return (
        <>
            <h1>Your id: {props.myId}</h1>

            {props.usersList ?
                props.usersList.map((user) => {
                        //вывод пользователей кроме, самого себя
                        return user.id !== props.myId &&
                        <div key={user.id}>
                            <h2>Name {user.firstName}</h2>
                            <p>online or no</p>
                            <button onClick={() => 
                                { props.startDialog(props.myId, user.id,allDialogs) }}>
                                Start chatting
                        </button>
                        </div>
                    
                })
                :
                'userList is empty'
            }
            <br />
            <br />
            <br />
        </>

    )
}
let mapStateToProps = (state) => {
    return {
        myId: state.firebase.auth.uid,
        usersList: state.firestore.ordered.users
    }
}
export default connect(mapStateToProps, {
    startDialog
})(TestComponent)