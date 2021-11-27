import React from "react";
import "./style.css";
import { Avatar, Button, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import firebase from "firebase";
import { useLocalContext } from "../../Context/Context";
import db, { storage } from "../../lib/firebase";
import { Announcement } from "..";

const Main = ({ classData }) => {
  const { loggedInMail } = useLocalContext();
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [Disabled, setdisabled] = useState(true);
  const { loggedInUser } = useLocalContext();

  useEffect(() => {
    if (classData) {
      let unsubscribe = db
        .collection("announcments")
        .doc("classes")
        .collection(classData.id)
        .onSnapshot((snap) => {});
      return () => unsubscribe();
    }
  }, [classData]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setdisabled(false);
    }
  };

  const cancelUpload = () => {
    setShowInput(false);
    setImage(null);
  };

  const handleUpload = () => {
    setdisabled(true);
    const uploadImage = storage.ref(`images/${image.name}`).put(image);
    var count = 0;

    uploadImage.on("state_changed", () => {
      if (count > 0) {
        return;
      }
      count++;
      storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          db.collection("announcments")
            .doc("classes")
            .collection(classData.id)
            .add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              imageUrl: url,
              text: inputValue,
              sender: loggedInMail,
            });
        });
    });

    setShowInput(false);
    setInput("");
    setImage(null);
  };
  return (
    <div className="main">
      <div className="main__wrapper">
        <div className="main__content">
          <div className="main__wrapper1">
            <div className="main__bgImage">
              <div className="main__emptyStyles" />
            </div>
            <div className="main__text">
              <h1 className="main__heading main__overflow">
                {classData.className}
              </h1>
              <div className="main__section main__overflow">
                {classData.section}
              </div>
              <div className="main__wrapper2">
                <em className="main__code">Class Code :</em>
                <div className="main__id">{classData.id}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__announce">
          <div className="main__status">
            <p>Upcoming</p>
            <p className="main__subText">No Work Due</p>
          </div>
          <div className="main__announcements">
            <div className="main__announcementsWrapper">
              {loggedInUser.email === classData.owner ? (
                <div className="main__ancContent">
                  {showInput ? (
                    <div className="main_form">
                      <TextField
                        id="filled-multiline-flexible"
                        multiline
                        label="Post Something"
                        variant="filled"
                        value={inputValue}
                        onChange={(e) => setInput(e.target.value)}
                      ></TextField>

                      <div className="main__buttons">
                        <span>
                          Upload Image(JPG):
                          <br></br>
                          <input
                            onChange={handleChange}
                            variant="outlined"
                            color="primary"
                            type="file"
                            name="imageupload"
                          />
                        </span>

                        <div>
                          <Button onClick={cancelUpload}> Cancel</Button>
                          <Button
                            id="my_btn_post"
                            onClick={handleUpload}
                            color="primary"
                            variant="contained"
                            disabled={Disabled}
                          >
                            Post
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="main__wrapper100"
                      onClick={() => setShowInput(true)}
                    >
                      <Avatar src={loggedInUser?.photoURL} />
                      <div>Post Something</div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="main__ancContent">Only Owner Can Post!</div>
              )}
            </div>
            <Announcement classData={classData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
