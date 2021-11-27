import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../lib/firebase";
import "./style.css";
const Announcement = ({ classData }) => {
  const [announcment, setAnnouncment] = useState([]);

  useEffect(() => {
    //saving images in database
    if (classData) {
      let unsubscribe = db
        .collection("announcments")
        .doc("classes")
        .collection(classData.id)
        .onSnapshot((snap) => {
          setAnnouncment(snap.docs.map((doc) => doc.data()));
        });
      return () => unsubscribe();
    }
  }, [classData]);

  return (
    <div>
      {/* sorting the accouncements in top to bottom order */}
      {announcment
        .sort((b, a) => {
          return a?.timestamp?.getTime() - b?.timestamp?.getTime();
        })
        .map((item, i) => (
          <div className="amt" key={i}>
            <div className="amt__Cnt">
              <div className="amt__top">
                <Avatar src={item.sender.photoURL} />
                <div>{item.sender}</div>
                <div className="amt_time">
                  {item.hasOwnProperty("timestamp") //used for printing date and time
                    ? new Date(item.timestamp).toDateString()
                    : ""}
                  <br></br>
                  {item.hasOwnProperty("timestamp")
                    ? new Date(item.timestamp).toLocaleTimeString()
                    : ""}
                </div>
              </div>
              <p className="amt__txt">{item.text}</p>
              <img className="amt__img" src={item.imageUrl} alt="" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Announcement;
