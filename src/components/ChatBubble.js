import React from 'react';
import {Chip} from '@material-ui/core'

function ChatBubble({title}) {
    return (
        <div>
  <Chip
        
        label={title}
        clickable
        color="primary"
        variant="outlined"
      />
        </div>
    )
}

export default ChatBubble
      