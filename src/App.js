import React from "react";
import { Drawer, Main } from "./components";
import { Login } from "./components";
import { JoinedClasses } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./Routes/Routes";
import { useLocalContext } from "./Context/Context";
import { useState, useEffect } from "react";
import db from "./lib/firebase";

function App() {
  const { loggedInMail } = useLocalContext();
  const [CreatedClasses, setCreatedClasses] = useState([]);
  const [joinedClasses, setJoinedClasses] = useState([]);

  //if user logged in equal to owner of the class then save created class data to firebase
  useEffect(() => {
    if (loggedInMail) {
      let unsubscribe = db
        .collection("CreatedClasses")
        .doc(loggedInMail)
        .collection("classes")
        .onSnapshot((snapshot) => {
          setCreatedClasses(snapshot.docs.map((doc) => doc.data()));
        });
      return () => unsubscribe();
    }
  }, [loggedInMail]);

  //if owner has not logged in then save logged in user data to firebase
  useEffect(() => {
    if (loggedInMail) {
      let unsubscribe = db
        .collection("JoinedClasses")
        .doc(loggedInMail)
        .collection("classes")
        .onSnapshot((snapshot) => {
          setJoinedClasses(snapshot.docs.map((doc) => doc.data().joinedData));
        });

      return () => unsubscribe();
    }
  }, [loggedInMail]);

  //Routing
  return (
    <Router>
      <Switch>
        {CreatedClasses.map((item, index) => (
          <Route key={index} exact path={`/${item.id}`}>
            <Drawer />
            <Main classData={item} />
          </Route>
        ))}
        {joinedClasses.map((item, index) => (
          <Route key={index} exact path={`/${item.id}`}>
            <Drawer />
            <Main classData={item} />
          </Route>
        ))}
        <IsUserRedirect user={loggedInMail} loggedInPath="/home" path="/" exact>
          <Login />
        </IsUserRedirect>
        <ProtectedRoute user={loggedInMail} path="/home" exact>
          <Drawer />
          <ol className="joined">
            {CreatedClasses.map((item, i) => (
              <JoinedClasses classData={item} key={i} />
            ))}

            {joinedClasses.map((item, i) => (
              <JoinedClasses classData={item} key={i} />
            ))}
          </ol>
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
