

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