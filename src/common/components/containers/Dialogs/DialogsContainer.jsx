
import { addnewMessageBodyAC, newMessageBodyAC } from "../../../../redux/dialogsReducer";
import Dialogs from './Dialogs';
import { connect } from "react-redux";

//container comp - shpvuma redux-i het (orinak dipsatch a anum)
// const DialogsContainer = (props) => {
//     // debugger
//   return (
//     <MyConext.Consumer>
//       {(store) => {
//         const state = store.getState().dialogsReducer;
        // const newMessageBodyCB = (event) => {
        //     // debugger
        //   store.dispatch(newMessageBodyAC(event.target.value));
        // };
        // const addnewMessageBodyCB = () => {
        //     // debugger
        //   state.newMessageBody && store.dispatch(addnewMessageBodyAC()); //problem - type-i masin anhagstanum enq
        // };
//         return (
//           <Dialogs
//           dialogs = {state.dialogs}
//           messages = {state.messages}
//           newMessageBodyCB = {newMessageBodyCB}
//           newMessageBody = {state.newMessageBody}
//           addnewMessageBodyCB = {addnewMessageBodyCB}
//           />
//         );
//       }}
//     </MyConext.Consumer>
//   );
// };

const mapStateToProps = (state) => {//store.getState() - return state
// console.log('state', state);//all state
        return {
            dialogs: state.dialogsReducer.dialogs,
            messages: state.dialogsReducer.messages,
            newMessageBody: state.dialogsReducer.newMessageBody
        }
}

const mapDispatchToProps = (dispatch) => {//store.dispatch.bind
    return {
        newMessageBodyCB : (event) => {
          dispatch(newMessageBodyAC(event.target.value));
        },
        addnewMessageBodyCB : () => {
          dispatch(addnewMessageBodyAC()); 
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);//create container component 
export default DialogsContainer;
