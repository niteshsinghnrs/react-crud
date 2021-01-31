import axios from "axios"
import * as actonTypes from "../State_Managment/actionType"

const formatData = (actionType,data) => {
     return{
         type:actionType,
         payload:data
     }

}
export function getUserCredentials(userName){
    const url = `http://swapi.dev/api/people/?search=${userName}`
    return dispatch => {
        return axios
        .get(url)
        .then(respData => {
            const userDetails = respData.data.results
            dispatch(formatData(actonTypes.GET_USERS_CREDENTIALS, {userDetails}))
        })
        .catch(error => alert(error ? error : "Unable to connect"))
    }
}

