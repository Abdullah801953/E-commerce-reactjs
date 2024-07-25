import React from "react";
import "../NewsLetter/NewsLetter.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <SendIcon className="sendIcon" />{" "}
      <input type="text" placeholder="Your emaill address" />
      <Button className="bg-g">Subscribe</Button>
    </div>
  );
};

export default NewsLetter;
