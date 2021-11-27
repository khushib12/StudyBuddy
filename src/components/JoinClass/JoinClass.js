import React from "react";
import { useLocalContext } from "../../Context/Context";
import { Dialog, Button, Avatar, TextField } from "@mui/material";
import { Slide } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import "./style.css";
import db from "../../lib/firebase";
import { useState } from "react";
import { auth } from "../../lib/firebase";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//You can Join existing classes using this component
const JoinClass = () => {
  const logout = () => {
    auth.signOut();
  };
  const { joinclassdialog, setjoinclassdialog, loggedInUser } =
    useLocalContext();
  const [ClassCode, setClassCode] = useState("");
  const [email, setemail] = useState("");
  const [error, seterror] = useState();
  const [joinedData, setjoinedData] = useState();
  const [classexist, setclassexist] = useState(false);

  //checks the input value of the class code and owners email and joins the class
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("CreatedClasses")
      .doc(email)
      .collection("classes")
      .doc(ClassCode)
      .get()
      .then((doc) => {
        if (doc.exists && doc.owner !== loggedInUser.email) {
          setclassexist(true);
          setjoinedData(doc.data());
          seterror(false);
        } else {
          seterror(true);
          setclassexist(false);
          return;
        }
      });

    //Storing data in database
    if (classexist === true) {
      db.collection("JoinedClasses")
        .doc(loggedInUser.email)
        .collection("classes")
        .doc(ClassCode)
        .set({
          joinedData,
        })
        .then(() => {
          setjoinclassdialog(false);
        });
    }
  };

  //join class form
  return (
    <div className="joinClass__base">
      <Dialog
        fullscreen
        open={joinclassdialog}
        onClose={() => setjoinclassdialog(false)}
        TransitionComponent={Transition}
      >
        <div className="joinClass">
          <div className="joinClass__wrapper">
            <div
              className="joinClass__wrapper2"
              onClick={() => setjoinclassdialog(false)}
            >
              <Close className="joinClass__svg" />
              <div className="joinClass__topHead">Join Class</div>
            </div>
            <Button
              className="joinClass__btn"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Join
            </Button>
          </div>
          <div className="joinClass__form">
            <p className="joinClass__formText">
              you are currently signed in as {loggedInUser?.email}
            </p>
            <div className="joinClass__loginInfo">
              <div className="joinClass__classLeft">
                <Avatar src={loggedInUser?.photoURL} />
                <div className="joinClass__loginText">
                  <div className="joinClass__loginName">
                    {loggedInUser?.displayNamed}
                  </div>
                  <div className="joinClass__loginEmail">
                    {loggedInUser?.email}
                  </div>
                </div>
              </div>
              <Button onClick={logout} variant="outlined" color="primary">
                Log Out
              </Button>
            </div>
          </div>
          <div className="joinClass__form">
            <div
              style={{ fontSize: "1.25rem", color: "#3c4043" }}
              className="joinClass__formText"
            >
              Class Code
            </div>
            <div
              style={{ color: "#3c4043", marginTop: "-5px" }}
              className="joinClass__formText"
            >
              Ask your teacher for the class code, then enter it here.
            </div>
            <div className="joinClass__loginInfo">
              <TextField
                id="outlined-basic"
                label="Class Code"
                variant="outlined"
                value={ClassCode}
                onChange={(e) => setClassCode(e.target.value)}
                error={error}
                helperText={error && "No class was found"}
              ></TextField>
              <TextField
                id="outlined-basic"
                label="Owner's Email"
                variant="outlined"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              ></TextField>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default JoinClass;
