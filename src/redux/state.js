//BLL - store (shop ===  redux === store)

import {reRenderEntireTree} from "../index";

const state = {
    profilePage: {
        posts: [
            { id: "1", post: "new post" },
            { id: "2", post: "blablabla" },
            { id: "3", post: "blabla" },
            { id: "4", post: "It's my first posts" },
            { id: "5", post: "Hi, how are you?" },


        ],
        newPostText : "Write your post"
    },

    dialogsPage: {
        messages: [
            { id: "1", message: "Hello" },
            { id: "2", message: "Hi" },
            { id: "3", message: "Barev" },
            { id: "4", message: "Privet" },
            { id: "5", message: "Adios" },
            { id: "6", message: "Gutentag" },
            { id: "7", message: "Gabarjoba" },
            { id: "8", message: "Hola" },
            { id: "9", message: "Salut" },
            { id: "10", message: "Bari Hachoxun" },

        ],
        dialogs: [
            { id: "1", name: "Lyov" },
            { id: "2", name: "Valer" },
            { id: "3", name: "Artem" },
            { id: "4", name: "Aram" },
            { id: "5", name: "Vlo" },
            { id: "6", name: "Varuj" },
            { id: "7", name: "Arsen" },
            { id: "8", name: "Artak" },
            { id: "9", name: "Aram" },
            { id: "10", name: "Aren" },

        ]
    },



addPost () {
   let id = +this.profilePage.posts[this.profilePage.posts.length - 1].id + 1 + ""; 
   this.profilePage.posts.push({
        id: id,
        post: this.profilePage.newPostText
    });
    reRenderEntireTree(this);
},

updateNewPostText (newPostText) {
    this.profilePage.newPostText = newPostText;
    reRenderEntireTree(this);
}

}
export default state;