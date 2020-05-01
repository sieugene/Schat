const SET_FILTERED_DIALOGS = 'DIALOGS/SET_FILTERED_DIALOGS'
const SET_CURRENT_ROOMID = 'DIALOGS/SET_CURRENT_ROOMID'
const SET_SEARCH_DIALOGS = 'DIALOGS/SET_SEARCH_DIALOGS'
let initialState = {
    filteredDialogs: [],
    roomId: '',
    searchDialogs: []
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTERED_DIALOGS:
            return {
                ...state,
                filteredDialogs: action.filteredDialogs
            }
        case SET_CURRENT_ROOMID:
            return {
                ...state,
                roomId: action.roomId
            }
        case SET_SEARCH_DIALOGS:
            return {
                ...state,
                searchDialogs: action.searchDialogs
            }
        default:
            return state
    }
}
export const setSearchDialogsAC = (searchDialogs) => {
    return {
        type: SET_SEARCH_DIALOGS,
        searchDialogs
    }
}
export const setFilteredDialogsAC = (filteredDialogs) => {
    return {
        type: SET_FILTERED_DIALOGS,
        filteredDialogs
    }
}
export const setCurrentRoomId = (roomId) => {
    return {
        type: SET_CURRENT_ROOMID,
        roomId
    }
}


export default dialogsReducer