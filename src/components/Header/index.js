import React from "react";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import "./Header.css";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="Header">
      <div className="Header__displayPicture">
        <Avatar
          alt="Remy Sharp"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="Header__displayName">
        <span className="Header__displayName1">Groot</span>
        <span className="Header__displayName2">Active Now</span>
      </div>
      <div className="Header__moreOptions">
        <MoreVertIcon onClick={handleClick} />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <a href="https://github.com/ishanarora143/groot" target="_blank">
            <MenuItem onClick={handleClose}>View Code</MenuItem>
          </a>
          <a href="https://github.com/ishanarora143/groot" target="_blank">
            <MenuItem onClick={handleClose}>
              Code with React-context-api
            </MenuItem>
          </a>
          <a
            href="https://github.com/ishanarora143/groot/tree/redux"
            target="_blank"
          >
            <MenuItem onClick={handleClose}>Code with react-redux</MenuItem>
          </a>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
