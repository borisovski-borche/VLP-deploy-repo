import React, { useState } from "react";
import Dropdown from "./Dropdown";
import classes from "./Navbar.module.scss";

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <span className={classes.navbar__item} onClick={() => setOpen(!open)}>
        {props.item}
        {props.item === "facility use" || props.item === "contact" ? (
          ""
        ) : (
          <img
            src="/img/caret-down-fill.svg"
            className={classes.navbar__arrow}
          />
        )}
      </span>
      {open && <Dropdown subitem={props.linkData} />}
    </li>
  );
}

export default NavItem;
