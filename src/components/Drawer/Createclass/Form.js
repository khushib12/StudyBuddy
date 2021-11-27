import { DialogActions, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useLocalContext } from "../../../Context/Context";
import { v4 as uuidv4 } from "uuid";
import db from "../../../lib/firebase";
import "./style.css";
//  This function is used for creating class forms
const Form = () => {
  const [className, setclassName] = useState();
  const [Section, setSection] = useState();
  const [Room, setclassRoom] = useState();
  const [Subject, setSubject] = useState();

  const { loggedInMail, setCreateClassDialog } = useLocalContext();
  //storing form data in database(firebase)
  const addClass = (e) => {
    e.preventDefault();
    const id = uuidv4();

    db.collection("CreatedClasses")
      .doc(loggedInMail)
      .collection("classes")
      .doc(id)
      .set({
        owner: loggedInMail,
        className: className,
        section: Section,
        room: Room,
        subject: Subject,
        id: id,
      })
      .then(() => {
        setCreateClassDialog(false);
      });
  };
  return (
    <div className="form">
      <p className="class__title">Create Class</p>
      <form onSubmit={addClass}>
        <div className="form__inputs">
          <TextField
            id="filled-basic"
            label="Class Name (required)"
            className="form__input"
            variant="filled"
            required
            value={className}
            onChange={(e) => setclassName(e.target.value)}
          ></TextField>

          <TextField
            id="filled-basic"
            label="Section (required) "
            className="form__input"
            variant="filled"
            value={Section}
            required
            onChange={(e) => setSection(e.target.value)}
          ></TextField>

          <TextField
            id="filled-basic"
            label="Subject (required)"
            className="form__input"
            variant="filled"
            value={Room}
            required
            onChange={(e) => setclassRoom(e.target.value)}
          ></TextField>

          <TextField
            id="filled-basic "
            label="Room (required)"
            className="form__input"
            variant="filled"
            value={Subject}
            required
            onChange={(e) => setSubject(e.target.value)}
          ></TextField>
        </div>
        <DialogActions>
          <input
            type="submit"
            className="create__form__button"
            value="CREATE"
          />
        </DialogActions>
      </form>
    </div>
  );
};

export default Form;
