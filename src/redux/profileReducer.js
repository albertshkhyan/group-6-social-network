const initialState = {
        posts: [
            { id: "1", post: "new post" },
            { id: "2", post: "blablabla" },
            { id: "3", post: "blabla" },
            { id: "4", post: "It's my first posts" },
            { id: "5", post: "Hi, how are you?" },
        ],
        newPostText: "",
}

const ADD_POST = "ADD_POST";//store in variable action type 
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {//ete error  lini kasi -> is not defined, husuma inch petqa lini action type-y
            return {
                ...state,
                posts: [...state.posts, {
                    id: 6,
                    post: state.newPostText
                }]
            }
        }
        // case "AD_POST" : //not give
        // case AD_POST//give error

        case UPDATE_NEW_POST_TEXT: return {
                ...state,
                posts: state.posts,
                newPostText: action.text
        }
        default: return state;
    }
}


////action Createors
//action - da obyekt e vory petqa unena minimum type hatkutyuny
//action creatory -  functia e vory petqa veradardzni action
 // case AD_POST//give error
const addPostCreator = () => {//action Createors
    return {type: ADD_POST};//return action
}
const updateNewPostCreator = (text) => {//action Createors
    return {type: UPDATE_NEW_POST_TEXT, text: text}//return action
}
export {
    addPostCreator,
    updateNewPostCreator
}

export default profileReducer;
