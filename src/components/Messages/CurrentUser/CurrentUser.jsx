import React from 'react'
import { getNameInDialog, userIsOnline } from './../../Dialogs/ListDialogs/HelperDialog';


const CurrentUser = (props) => {
    return (
        <div>
            <h3 className="messages__currentName">
                {getNameInDialog(props.dialog[0].invited, props.dialog[0].creator,
                    props.users,
                    props.myId
                )}
            </h3>
            <p className="messages__isonline">
                {userIsOnline(props.dialog[0].invited, props.dialog[0].creator,
                    props.users,
                    props.myId,
                    props.usersOnline)}
            </p>
        </div>

    )
}

export default CurrentUser
