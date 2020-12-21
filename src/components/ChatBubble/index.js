import React from "react";
import { Chip } from "@material-ui/core";
// import { useStateValue } from "../StateProvider";
import { handleQuery } from "../../reducer.js";
import { connect } from "react-redux";

function ChatBubble({ title, handleQuery, key }) {
  const handleChip = e => {
    console.log(e);

    handleQuery(title);
  };
  return (
    <div onClick={handleChip} value={title} key={key}>
      <Chip
        className="ChatChip"
        value={title}
        label={title}
        clickable
        color="primary"
        variant="outlined"
      />
    </div>
  );
}

export default connect(null, { handleQuery })(ChatBubble);
