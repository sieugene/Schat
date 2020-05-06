import * as moment from 'moment';

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
//больше дня или нет
export const checkManyOneDay = (createdAt) => {
    if (createdAt) {
        let oneDayInSeconds = -86400
        let manyDays = createdAt.toDate().getTime() / 1000;
        let currentDate = new Date().getTime() / 1000;
        let result = Math.ceil(manyDays - currentDate);
        if (result <= oneDayInSeconds) {
            return moment(createdAt.toDate()).format("DD.MM.YYYY") + ' ' + moment(createdAt.toDate()).format('HH:mm')
        } else {
            return moment(createdAt.toDate()).format('HH:mm')
        }
    }
}
