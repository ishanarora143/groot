import React ,{useState, useEffect} from 'react';
import SendIcon from '@material-ui/icons/Send';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
// import { useStateValue } from "../StateProvider";
import axios from 'axios';
import {handleQuery} from '../reducer.js'
import { connect } from "react-redux";
import {inputQuery} from '../actions'


import './InputBox.css'


function InputBox(props) {

    const [input,setInput] = useState('')


    useEffect(()=>{
        let e={
            target:{value:'Hi'}
        }
        inputQuery(e)
        props.handleQuery("Hi")
    },[])

    const inputChange=(e)=>{
        console.log(e.target.value)
        setInput(e.target.value)
        props.inputQuery(e)
    }

    const handleKeyDown = (e)=>{
        let sessionId = window.localStorage.getItem('sessionId');
        // e.preventDefault()
        if (e.key === 'Enter') {
            props.handleQuery(input)
            setInput('')  
        }
    }

    const handleQuery1 = ()=>{
        handleQuery(input)
        setInput('')   
    }

    return (
        <div className="InputBox">
            <EmojiObjectsIcon  />
                <input type="text" value={input} onChange={inputChange} onKeyDown={handleKeyDown} placeholder="Ask me something" />
            <SendIcon onClick={handleQuery1} />

        </div> 


    )
}
const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      inputQuery: (e) => dispatch(inputQuery(e)),
      handleQuery: (query) => dispatch(handleQuery(query)),
    }
  }
export default connect(null,mapDispatchToProps)(InputBox)
