import React ,{useState} from 'react';
import SendIcon from '@material-ui/icons/Send';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { useStateValue } from "../StateProvider";
import axios from 'axios';
import {handleQuery} from '../reducer.js'

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
            handleQuery(input,dispatch)

            setInput('')  
        }
    }
    const handleQuery1 = ()=>{
        handleQuery(input,dispatch)
        setInput('')   
    }

    return (
           <div className="InputBox">
            <EmojiObjectsIcon />
            <input type="text" value={input} onChange={inputChange} onKeyDown={handleKeyDown} placeholder="Ask me something" />
            <SendIcon onClick={handleQuery1} />

          </div> 

    )
}

export default InputBox
