import React from 'react';
import {Chip} from '@material-ui/core';
// import { useStateValue } from "../StateProvider";
import {handleQuery} from '../reducer.js';
import { connect } from "react-redux";



function ChatBubble({title,handleQuery}) {

  const handleChip = (e) =>{
    console.log(e.target.innerHTML)

    handleQuery(e.target.innerHTML)
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

export default connect(null,{handleQuery})(ChatBubble)
      