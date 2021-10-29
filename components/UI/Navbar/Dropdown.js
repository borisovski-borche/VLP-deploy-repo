import React from "react";
import classes from "./Navbar.module.scss";

function Dropdown(props) {
  return (
    <div className={classes.dropdown}>
      <ul>
        {props.subitem.map(subitem => (
          <li>
            <a href={subitem.target}>{subitem.linkTitle}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
