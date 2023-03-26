import { act } from "react-dom/test-utils";
import { supabase } from "../Supabase/Config";

export const initialState = {
   username:" ",
   messages:[
   ],
   error:"",
   loadingInitial:false,
   routeHash:"",
   isOnBottom:false,
   newIncomingMessageTrigger:null,
   messageId:0

  };

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
    
          case "SET_USER":
            return {
              ...state,
              username: action.username
            }

          case "SET_ERROR":
            return {

              ...state,
              error:action.error
            }

            case "SET_MESSAGES":
              return {

                ...state,
                messages:action.messages
              }
            
            case "SET_INCOMING_MESSAGE_TRIGGER":
              return {
                ...state,
                newIncomingMessageTrigger:action.payload

              }

              case "SET_MESSAGE_ID":
                return {
                  ...state,
                  messageId:action.value
                }




      
     
      default:
        return state;
    }
  };
  
  export default reducer;