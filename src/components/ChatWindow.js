import React,{useState,useRef,useEffect} from 'react';
import ChatBubbleIn from './ChatBubbleIn';
import ChatBubbleOut from './ChatBubbleOut';
import ChatBubbleLoading from './ChatBubbleLoading';
import ChatBubble from './ChatBubble';
import ChatCard from './ChatCard';
import { useStateValue } from "../StateProvider";
import './ChatWindow.css';

function ChatWindow() {
    const [{user,messages,scrollBy,loading,inputQuery},dispatch] = useStateValue()
    const inputRef = useRef(null)
    console.log(inputRef)
    useEffect(() => {
        console.log("count2 changed!");
        inputRef.current.scrollBy(0,500)

      }, [scrollBy]);
    console.log(messages)
    return (
        <div ref={inputRef}  className="ChatWindow">
            {
                messages.map((el)=>
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
                        :""
                         )
                         :""
                    }
                         
                        
                            
                    </div>
                )
            }
            {

                        loading?
                        <>
                        <ChatBubbleOut message={inputQuery} />

                        <ChatBubbleLoading  />
                        </>
                        :
                        ""

                    }
        </div>
    )
}

export default ChatWindow
