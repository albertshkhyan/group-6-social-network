const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

// const users = fetch("")

const initialState = {//users object
    users: [
        // {
        //     "name": "GrinMorg",
        //     "id": 9741,
        //     "uniqueUrlName": null,
        //     "photos": {
        //         "small": null,
        //         "large": null
        //     },
        //     "status": null,
        //     "followed": false
        // },
        // {
        //     "name": "Nstotti",
        //     "id": 9740,
        //     "uniqueUrlName": null,
        //     "photos": {
        //         "small": null,
        //         "large": null
        //     },
        //     "status": null,
        //     "followed": true
        // },
        
        // {
        //     "name": "Nstotti",
        //     "id": 9740,
        //     "uniqueUrlName": null,
        //     "photos": {
        //         "small": null,
        //         "large": null
        //     },
        //     "status": null,
        //     "followed": true
        // },
        
    ]
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

export default usersReducer;