import React ,{useState} from 'react';
import SendIcon from '@material-ui/icons/Send';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { useStateValue } from "../StateProvider";
import axios from 'axios';

import './InputBox.css'


function InputBox() {
    const [input,setInput] = useState('')
    const [{user,messages},dispatch] = useStateValue()

    const inputChange=(e)=>{
        console.log(e.target.value)
        setInput(e.target.value)
        dispatch({
            type:"INPUT_QUERY",
            input:e.target.value
        })
    }
    const handleKeyDown = (e)=>{
        let sessionId = window.localStorage.getItem('sessionId');
        
        // e.preventDefault()
        if (e.key === 'Enter') {
            dispatch({
                type:"LOADING",
            })
            axios.post('https://groot-dialoglow-server.herokuapp.com/handleQuery',{query:input,sessionId:sessionId})
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
            setInput('')  
        }
    }
    const handleQuery = ()=>{
        let sessionId = window.localStorage.getItem('sessionId');
                
        dispatch({
            type:"LOADING",
        })
        axios.post('https://groot-dialoglow-server.herokuapp.com/handleQuery',{query:input,sessionId:sessionId})
        .then((response)=>{
            if (!sessionId ){
                window.localStorage.setItem('sessionId',response.data.data.queryResult.sessionId)
            }

            dispatch({
                type:"ADD_MESSAGE",
                message:{response:response.data.data.queryResult,id:response.data.data.responseId,queryText:response.data.data.queryResult.queryText,fulfillmentText:response.data.data.queryResult.fulfillmentText}
            })
        })
        setInput('')   

        
    }

    return (
           <div className="InputBox">
            <EmojiObjectsIcon />
            <input type="text" value={input} onChange={inputChange} onKeyDown={handleKeyDown} placeholder="Ask me something" />
            <SendIcon onClick={handleQuery} />

          </div> 

    )
}

export default InputBox
