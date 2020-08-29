//action type
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

// const users = fetch("")

const initialState = {//users object
    users: [

    ],
    totalCount: 0,//serverum gtnvwx userneri qanaky (;ength)
    currenPage: 1,//nerkayis ejy
    pageSize: 5,//qani hat element petqa cucadrvi amen ejin

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: return {
            ...state,
            users: [...state.users].map(u => {
                if (u.id === action.id) {
                    return {
                        ...u,
                        followed: false
                    }
                }
                return u;
            })

        }
        case UNFOLLOW: return {
            ...state,
            users: [...state.users].map(u => {
                if (u.id === action.id) {
                    return {
                        ...u,
                        followed: true
                    }
                }
                return u;
            })
        }
        case SET_USERS: return {
            ...state,
            users: [
                ...state.users,
                ...action.users
            ]
        }
        case SET_TOTAL_COUNT: return {
            ...state,
            totalCount: action.totalCount
        }
        case SET_CURRENT_PAGE: return {
            ...state,
            currenPage: action.currenPage
        }
        default: return state;
    }
}

//action createors
export const followAC = id => {
    return {
        type: FOLLOW,
        // id: id
        id
    }
}
// followAC(true);
export const unfollowAC = id => {
    return {
        type: UNFOLLOW,
        // id: id
        id
    }
}
// followAC(true);

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users//users: users
    }
}
export const setTotalCountAC = (totalCount) => {
    return(
        { type: SET_TOTAL_COUNT, totalCount }
    );
}

export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage}
}

export default usersReducer;