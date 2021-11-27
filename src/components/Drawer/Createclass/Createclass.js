import React from "react";
import { useLocalContext } from "../../../Context/Context";
import { Dialog, DialogActions, Button, Checkbox } from "@material-ui/core";
import { DialogContent } from "@mui/material";
import "./style.css";
import { useState } from "react";
import Form from "./Form";

//This function is used for creating new classes
const CreateClass = () => {
  const { CreateClassDialog, setCreateClassDialog } = useLocalContext();
  const [check, setChecked] = useState(false);
  const [showform, setshowform] = useState(false);
  return (
    <div>
      <Dialog
        onClose={() => setCreateClassDialog(false)}
        aria-labelledby="customised-dialog-title"
        open={CreateClassDialog}
        maxWidth={showform ? "lg" : "xs"}
      >
        {showform ? (
          <Form />
        ) : (
          <>
            <div className="class__title">
              Using Study Buddy at a school with students?
            </div>
            <DialogContent className="class__content">
              <p className="class__text">
                <a href="/help" className="class__link">
                  Read the intructions before proceeding
                </a>
              </p>
              <p>
                Students cannot use Study Buddy at a school with personal
                accounts.
              </p>

              <div className="class__checkboxWrapper">
                {/* when permission checked,check box enables */}
                <Checkbox color="primary" onChange={() => setChecked(!check)} />
                <p>
                  I've read and understand the above notice, and I'm not using
                  Classroom at a school with students
                </p>
              </div>
            </DialogContent>
            {/* create classes using form */}
            <DialogActions>
              <Button autoFocus onClick={() => setCreateClassDialog(false)}>
                Close
              </Button>
              <Button
                autoFocus
                color="primary"
                disabled={!check}
                onClick={() => setshowform(true)}
              >
                Continue
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default CreateClass;
