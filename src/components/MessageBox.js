import React from "react";
import { Component } from "react";

import axios from "axios";

class MessageBox extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const token = localStorage.getItem("token");
    const tokenBearer = "Bearer " + token;
    axios({
      method: "GET",
      url: "https://jodacare-assignment.herokuapp.com/api/messages",
      data: {
        username,
        password
      },
      headers: {
        "content-type": "application/jason",
        Authorization: tokenBearer
      }
    }).then(response => {
      this.setState({ data: response.data.results });
    });
  }

  render() {
    return (
      <ul className="container">
        {this.state.data.map((item, index) => (
          <li key={index + 1} className="row">
            <div id="outer-box" className="col-sm-10 offset-sm-1">
              <div id="message-details" className="row">
                <div id="img-wrap" className="col-3">
                  <a href="#">
                    <img
                      id="profile-pic"
                      src={
                        item.created_by.image
                          ? item.created_by.image
                          : "images/unknown-user.png"
                      }
                      alt="N/A"
                      className="border border-secondary rounded-circle"
                    />
                  </a>
                </div>
                <div className="col-9">
                  <div id="profile-name" className="row">
                    <a href="#">
                      {item.created_by.first_name +
                        " " +
                        item.created_by.last_name}
                    </a>
                  </div>
                  <div id="date" className="row">
                    {"sendt: " + item.created.slice(0, 16).replace("T", " på ")}
                  </div>
                </div>
              </div>
              <p id="message-text" className="bordr-top">
                {item.text}
              </p>
              <div id="message-bottom">
                <a href="#">
                  <img
                    id="comment-icon"
                    src="images/comment-icon.png"
                    alt="NA"
                  />
                  <p id="comments-number">{item.num_comments}</p>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default MessageBox;
