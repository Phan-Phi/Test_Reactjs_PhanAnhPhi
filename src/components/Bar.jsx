import React from "react";
import "../style/Bar.style.scss";

export default function Bar() {
  return (
    <div className="NavBar">
      <div className="NavBar_content">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>News</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
