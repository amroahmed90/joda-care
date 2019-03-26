import React from "react";

const MessageBox = props => {
  return (
    <div className="container">
      <div className="row">
        <div id="outer-box" className="col-sm-10 offset-sm-1">
          <div id="message-details" className="row">
            <div id="img-wrap" className="col-3">
              <a href="#">
                <img
                  id="profile-pic"
                  src="profilepic.jpg"
                  alt="Profile Pic"
                  className="border border-secondary rounded-circle"
                />
              </a>
            </div>
            <div className="col-9">
              <div id="profile-name" className="row">
                <a href="#"> Amro Abdelfatah</a>
              </div>
              <div id="date" className="row">
                sent: 26/03/2019
              </div>
            </div>
          </div>
          <p id="message-text" className="bordr-top">
            Here is the message text!
          </p>
          <div id="message-bottom">
            <a href="#">
              <img id="comment-icon" src="images/comment-icon.png" alt="NA" />
              <p id="comments-number">2</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
