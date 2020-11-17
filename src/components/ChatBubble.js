import React from 'react';
import {Chip} from '@material-ui/core';
import { useStateValue } from "../StateProvider";
import {handleQuery} from '../reducer.js';


function ChatBubble({title}) {
  const [{user,messages},dispatch] = useStateValue()

  const handleChip = (e) =>{
    console.log(e.target.innerHTML)

    handleQuery(e.target.innerHTML,dispatch)
  }
    return (
        // <div>
          <Chip className="ChatChip"
          onClick = {handleChip}
          label={title}
          clickable
          color="primary"
          variant="outlined"
          />
        // </div>
    )
}

export default ChatBubble
      