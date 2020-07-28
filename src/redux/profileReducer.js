const initialState = {
        posts: [
            { id: "1", post: "new post" },
            { id: "2", post: "blablabla" },
            { id: "3", post: "blabla" },
            { id: "4", post: "It's my first posts" },
            { id: "5", post: "Hi, how are you?" },
        ],
        newPostText: "Barev Vig jan",
}

///action type erbvor veragrum enq popoxakani da ognum e mez hetaga sxalnerix xusapelu hamar
const ADD_POST = "ADD_POST";//store in variable action type 
// console.log(ADD_POST === "ADD_POST");///true
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {//ete error  lini kasi -> is not defined, husuma inch petqa lini action type-y
            // let id = +state.posts[state.posts.length - 1].id + 1 + "";
            return {
                ...state,
                //push aneluc heto petqa datarkel newPostText
                posts: [...state.posts, {
                    id: state.posts.length + 1 + '',
                    post: state.newPostText
                }],
                newPostText : ""

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
    return {type: UPDATE_NEW_POST_TEXT, text}//return action
}
export {
    addPostCreator,
    updateNewPostCreator
}

export default profileReducer;
