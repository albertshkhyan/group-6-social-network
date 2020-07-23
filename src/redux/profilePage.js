const { default: state } = require("./state")

const initialState = {
    profilePage: {
      posts: [
        { id: "1", post: "new post" },
        { id: "2", post: "blablabla" },
        { id: "3", post: "blabla" },
        { id: "4", post: "It's my first posts" },
        { id: "5", post: "Hi, how are you?" },
  
      ],
      newPostText: "",
    }
}

  const profileReducer = (state = initialState, action) => {
    // debugger;
    switch (action.type) {
        case "ADD_POST": return {
        ...state,
        posts: [...state.profilePage.posts, {
          id: 1,
          post: this.profilePage.newPostText
        }]
    }
    case "UPDATE_NEW_POST_TEXT": return {
        ...state,
        profilePage: {
          posts : state.profilePage.posts,
          newPostText: action.x
        }
      }
      default : return state;
    }
  }

  export default profileReducer;