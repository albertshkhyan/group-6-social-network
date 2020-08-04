const NEW_MESSAGE_BODY = "NEW_MESSAGE_BODY";
const ADD_NEW_MESSAGE_BODY = "ADD_NEW_MESSAGE_BODY";

const initialState = {
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
    // {idL "11", message: "Barev"}

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

  ],
  newMessageBody: ""

}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE_BODY: {
      return {
        //en inchvor mutqagrum enq textarea mej, message enq uxarkum
        ...state,
        newMessageBody: action.text
      }
    }
    case ADD_NEW_MESSAGE_BODY: {
      // const newState =  [...state.messages];
      // newState.push({
      // id: state.messages.length + 1 + '',
      // message : state.newMessageBody
      // });
      return {
        ...state,
        messages: [...state.messages, {
          id: state.messages.length + 1 + '',
          message: state.newMessageBody
        }]
        // messages: [{...state.messages[0]}]
      }
    }

    default: return state;
      return state;
  }
}


///action creatorne
export const  newMessageBodyAC = (newText) => {
  return {
    type: NEW_MESSAGE_BODY,//action type
    text: newText
  }
}
// newMessageBodyAC("Barev");

export const addnewMessageBodyAC = () => {
  return {
    type: ADD_NEW_MESSAGE_BODY,
  }
}
// addnewMessageBodyAC();


export default dialogsReducer;
