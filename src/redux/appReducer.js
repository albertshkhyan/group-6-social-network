const IS_FETCHING = "IS_FETCHING";

const initialState = {
    isFetching: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FETCHING: return {
            ...state,
            isFetching: action.isFetching
        }
        default: return state;//Declaration or statement expected.
    }
}

//action creator
export const isFetchingAC = (isFetching) => {
    return {
        type: IS_FETCHING,
        isFetching,
    }
}

export default appReducer;