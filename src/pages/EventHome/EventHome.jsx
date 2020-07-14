import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as firebase from "firebase/app";
import "firebase/firebase-firestore";
import "./EventHome.scss";
import { Field } from "components/_common";
import { Link } from "react-router-dom";

const EventHome = (props) => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    console.log(id);
    const db = firebase.firestore();
    db.collection("events")
      .doc(id)
      .get()
      .then((query) => {
        console.log(query.data());
        setEvent(query.data());
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {};
  }, []);

  return (
    <div className="EventHome">
      <div className="back"></div>
      <div className="EventHome-container">
        <div className="EventHome-content">
          <div className="event-name">
            <h1 className="f-title">EVENTO</h1>
            <h2 className="f-large">Published</h2>
          </div>
          <div className="content-card shadow b-radius">
            <h1>Your Event isn't Published</h1>
            <Link to="">
              <button className="btn">Go to Config</button>
            </Link>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default EventHome;
