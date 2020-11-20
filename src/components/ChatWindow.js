import React,{useState,useRef,useEffect} from 'react';
import ChatBubbleIn from './ChatBubbleIn';
import ChatBubbleOut from './ChatBubbleOut';
import ChatBubbleLoading from './ChatBubbleLoading';
import ChatBubble from './ChatBubble';
import LinkOut from './LinkOut'
import ChatCard from './ChatCard';
import './ChatWindow.css';
import { connect } from "react-redux";
import {inputQuery} from '../actions'


function ChatWindow(props) {
    const inputRef = useRef(null)
    console.log(inputRef)
    useEffect(() => {
        console.log("count2 changed!");
        inputRef.current.scrollBy(0,500)

      }, [props.scrollBy]);
    console.log(props.messages)
    return (
        <div ref={inputRef}  className="ChatWindow">
            {
                props.messages.map((el)=>
                <div style={{display:'flex',flexDirection:'column'}} key={el.id}>
                    
                    {
                        el.queryText?
                        <ChatBubbleOut message={el.queryText} />
                        :""
                    }
                    {
                        el.fulfillmentText?
                        <ChatBubbleIn message={el.fulfillmentText} />
                        :
                        ""
                    }
                    {
                        el.response.fulfillmentMessages?
                        el.response.fulfillmentMessages.map((message)=>
                            
                        message.message=="basicCard"?
                        <ChatCard 
                        title={message.basicCard.title} 
                        formattedText={message.basicCard.formattedText} 
                        img = {message.basicCard.image.imageUri}
                        button = {message.basicCard.buttons}
                         />
                         :
                        message.message == "suggestions"?
                        <div className="ChatWindow__suggestions">
                            {
                        message.suggestions.suggestions.map((m)=>
                            <ChatBubble title={m.title} />

                        )
                            }
                        </div>
                        :
                        message.message == "linkOutSuggestion" ?
                            <LinkOut 
                            title={message.linkOutSuggestion.destinationName}
                            link = {message.linkOutSuggestion.url}
                            />
                            :""
                         )
                         :""
                    }
                         
                        
                            
                    </div>
                )
            }
            {

                        props.loading?
                        <>
                        <ChatBubbleOut message={props.inputQuery} />

                        <ChatBubbleLoading  />
                        </>
                        :
                        ""

                    }
        </div>
    )
}
const mapStateToProps = state => {
    console.log("state",state)
    return {
        loading:state.loading,
        messages:state.messages,
        scrollBy:state.scrollBy,inputQuery:state.inputQuery
    };
    //   const allTodos = getTodos(state);
    //   return {
    //     todos:
    //       visibilityFilter === VISIBILITY_FILTERS.ALL
    //         ? allTodos
    //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
    //           ? allTodos.filter(todo => todo.completed)
    //           : allTodos.filter(todo => !todo.completed)
    //   };
  };
export default connect(
   mapStateToProps
)(ChatWindow)
