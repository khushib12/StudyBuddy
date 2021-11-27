import { AppBar, Toolbar, Typography, Menu, MenuItem } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Avatar from "@mui/material/Avatar";
import React from "react";
import { useStyles } from "./style";
import CreateClass from "../Drawer/Createclass/Createclass";
import { useLocalContext } from "../../Context/Context";
import { JoinClass } from "..";
import { auth } from "./../../lib/firebase";
import logo from "./../../asset/logo.ico";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
//This component is header of the web app
const Header = ({ children }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const { setCreateClassDialog, setjoinclassdialog, loggedInUser } =
    useLocalContext();

  //This function enables logout functionality
  const logout = () => {
    auth.signOut();
    window.location = "/";
  };
  //This function is used for redirecting to home page
  const redirect = (event) => {
    event.preventDefault();
    window.location = "/home";
  };

  //This function is used for creating classes
  const handleCreate = () => {
    handleClose();
    setCreateClassDialog(true);
  };

  //This function is used for joining existing classes
  const handleJoin = () => {
    handleClose();
    setjoinclassdialog(true);
  };
  return (
    <div className={classes.root}>
      <AppBar
        style={{ background: "#59b4bb" }}
        className={classes.appbar}
        position="static"
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerWrapper}>
            {children}
            <img className={classes.logo} src={logo} alt="" />

            <Typography
              onClick={redirect}
              variant="h6"
              className={classes.title}
            >
              Study Buddy
            </Typography>
          </div>

          {/* This helps in selection join class and create class from the menu */}
          <div className={classes.header__wrapper__right}>
            <Add onClick={handleClick} className={classes.icon} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleCreate}>Create Class</MenuItem>
              <MenuItem onClick={handleJoin}>Join Class</MenuItem>
            </Menu>
            <div>
              <Avatar
                // Displays the photo of the logged in user
                src={loggedInUser?.photoURL}
                className={classes.icon}
              />
            </div>
            <ExitToAppIcon style={{ cursor: "pointer" }} onClick={logout} />
          </div>
        </Toolbar>
      </AppBar>
      <CreateClass />
      <JoinClass />
    </div>
  );
};

export default Header;
