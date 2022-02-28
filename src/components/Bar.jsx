import React from "react";
import "../style/Bar.style.scss";

export default function Bar() {
  return (
    <div className="NavBar">
      <div className="NavBar_content">
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Services</p>
          </li>
          <li>
            <p>News</p>
          </li>
          <li>
            <p>Blog</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
