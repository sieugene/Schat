

export const getNameInDialog = (invited, creator, users, myId) => {
    if (users.length !== 0) {
        if (invited === myId) {
            let result = users.filter((id) => {
                return id.id === creator
            })
            return result[0] ? result[0].firstName : ''
        } else {
            let result = users.filter((id) => {
                return id.id === invited
            })
            return result[0] ? result[0].firstName : ''
        }
    }
}

export const userIsOnline = (invited, creator, users, myId, usersOnlineArray) => {
    debugger
    const userIsOnline = (userId) => {
        let result = usersOnlineArray ? usersOnlineArray.filter((u) => {
            return u.key === userId
        }) : []
        if (result.length >= 1) {
            return 'online'
        } else {
            return 'offline'
        }
    }
    if (users.length !== 0) {
        if (invited === myId) {
            let result = users.filter((id) => {
                return id.id === creator
            })
            return result[0] && userIsOnline(result[0].id)
        } else {
            let result = users.filter((id) => {
                return id.id === invited
            })
            return result[0] && userIsOnline(result[0].id)
        }
    }
}