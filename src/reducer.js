import axios from 'axios';


export const initialState = {
    messages:[],
    scrollBy:0,
    loading:false,
    user:null,
    inputQuery:""
}
export const handleQuery=(query,dispatch)=>{
    dispatch({
        type:"LOADING",
    })
    let sessionId = window.localStorage.getItem('sessionId')
    axios.post('https://groot-dialoglow-server.herokuapp.com/handleQuery',{query:query,sessionId:sessionId})
    .then((response)=>{
        if (!sessionId ){
            window.localStorage.setItem('sessionId',response.data.data.queryResult.sessionId)
        }    
        dispatch({
            type:"ADD_MESSAGE",
            message:{
                id:response.data.data.responseId,
                queryText:response.data.data.queryResult.queryText,
                fulfillmentText:response.data.data.queryResult.fulfillmentText,
                response:response.data.data.queryResult
            }
        })
    })
    .catch((err)=>{
        console.log(err)
    })

}

const reducer = (state,action)=>{
    console.log(state)
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                // basket:[...state.basket,action.item]
            }
        
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