import axios from 'axios';
import { LOADING, ADD_MESSAGE} from './actionTypes';
import { addMessage, loading} from './actions';



export const initialState = {
    messages:[],
    scrollBy:0,
    loading:false,
    user:null,
    inputQuery:""
}
export const handleQuery=(query)=>(dispatch)=>{
    console.log(query)
    dispatch(loading())
    let sessionId = window.localStorage.getItem('sessionId')
    axios.post('https://groot-dialoglow-server.herokuapp.com/handleQuery',{query:query,sessionId:sessionId})
    .then((response)=>{
        if (!sessionId ){
            window.localStorage.setItem('sessionId',response.data.data.queryResult.sessionId)
        }    
        dispatch(addMessage(response))
    })
    .catch((err)=>{
        console.log(err)
    })

}

const reducer = (state=initialState,action)=>{
    console.log(state)
    switch(action.type){
        
        case "ADD_MESSAGE":
            // console.log('my name is ishan arora')
            // console.log(action.message)
            return {
                ...state,
                scrollBy:state.scrollBy+100,
                loading:false,
                messages:[...state.messages,action.message]
            }
        case "LOADING":
            // console.log('my name is ishan arora')
            // console.log(action.message)
            return {
                ...state,
                scrollBy:state.scrollBy+100,
                loading:true
                // messages:[...state.messages,action.message]
            }
        case "INPUT_QUERY":
            console.log(action.input)
                // console.log('my name is ishan arora')
                // console.log(action.message)
                return {
                    ...state,
                    inputQuery:action.input
                    // messages:[...state.messages,action.message]
                }
                    
            
        default:
            return state
    }
}

export default reducer