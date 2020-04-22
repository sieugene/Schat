const SET_FILTERED_DIALOGS = 'DIALOGS/SET_FILTERED_DIALOGS'

let initialState = {
    filteredDialogs: []
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTERED_DIALOGS:
            return {
                ...state,
                filteredDialogs: action.filteredDialogs
            }
        default:
            return state
    }
}

export const setFilteredDialogsAC = (filteredDialogs) => {
    return {
        type: SET_FILTERED_DIALOGS,
        filteredDialogs
    }
}


export default dialogsReducer