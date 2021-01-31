import * as ActionType from "../State_Managment/actionType"

 const initialValue = {
     userDetails : {},
 }

 export default function mainReducer(state = initialValue,action){
     switch(action.type){
         case ActionType.GET_USERS_CREDENTIALS:
             return {
                 ...state,
                 userDetails:action.payload.userDetails
             }
             default:
             return state
     }
 } 