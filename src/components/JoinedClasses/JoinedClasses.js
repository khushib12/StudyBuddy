import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FolderOpen, PermContactCalendar } from "@material-ui/icons";
import DeleteIcon from "@mui/icons-material/Delete";
import db from "./../../lib/firebase";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocalContext } from "../../Context/Context";

//Displays the joined classes on the user/student profile
const JoinedClasses = ({ classData }) => {
  const { loggedInMail } = useLocalContext();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const deleteClass = (name) => {
    if (name === classData.owner) {
      db.collection("CreatedClasses")
        .doc(name)
        .collection("classes")
        .doc(classData.id)
        .delete();
    } else {
      db.collection("JoinedClasses")
        .doc(name)
        .collection("classes")
        .doc(classData.id)
        .delete();
    }
  };

  return (
    <li className="joined__list">
      <Link to={`/${classData.id}`}>
        <div className="joined__wrapper">
          <div className="joined__container">
            <div className="joined__imgWrapper" />
            <div className="joined__image" />
            <div className="joined__content">
              <Link className="joined__title" to={`/${classData.id}`}>
                <h2>{classData.className}</h2>
              </Link>
              <p className="joined__owner">{classData.owner}</p>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </Link>
      <div className="joined__bottom">
        <DeleteIcon
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        ></DeleteIcon>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>
            {loggedInMail === classData.owner
              ? "Are you sure you want to permanently delete this class?"
              : "Do you want to un-enroll from this class?"}
          </Typography>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={() => deleteClass(loggedInMail)}>
            Yes Delete it
          </Button>
        </Popover>
        <PermContactCalendar></PermContactCalendar>
        <FolderOpen></FolderOpen>
      </div>
    </li>
  );
};

export default JoinedClasses;
