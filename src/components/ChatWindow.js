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
        inputRef.current.scrollBy(0,200)

      }, [scrollBy]);

    const han = ()=>{
        console.log(inputRef.current)
        
        inputRef.current.scrollBy(0,scrollBy)
    }
    // window.scrollBy(0, 100); // Scroll 100px downwards
    console.log(messages)
    // let messages=[]
    return (
        <div ref={inputRef}  className="ChatWindow">
            {
                messages.map((el)=>
                <div style={{display:'flex',flexDirection:'column'}} key={el.id}>
                    <ChatBubble title = "Linked In" />
                    
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
                        message.message=="basicCard"&&
                        <ChatCard 
                        title={message.basicCard.title} 
                        formattedText={message.basicCard.formattedText} 
                        img = {message.basicCard.image.imageUri}
                        button = {message.basicCard.buttons}
                         />
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
