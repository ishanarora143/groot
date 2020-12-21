import React from "react";
import { Chip } from "@material-ui/core";
import "./LinkOut.css";
// import { useStateValue } from "../StateProvider";
// import {handleQuery} from '../reducer.js';

function LinkOut({ title, link }) {
  //   const [{user,messages},dispatch] = useStateValue()

  const handleChip = e => {
    console.log(e.target.innerHTML);
    window.open(link, "_blank");

    // handleQuery(e.target.innerHTML,dispatch)
  };
  return (
    // <div>
    // <a href={}
    <Chip
      className="ChatChip"
      onClick={handleChip}
      label={title}
      clickable
      color="primary"
      variant="outlined"
    />
    // </div>
  );
}

export default LinkOut;
