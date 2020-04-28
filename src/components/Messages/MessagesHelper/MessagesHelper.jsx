export const chatAccess = (dialog, myId) => {
    let result = dialog.filter((chat) => {
        return chat.invited === myId || chat.creator === myId
    })
    if (result.length === 0) {
        return true
    } else {
        return false
    }
}