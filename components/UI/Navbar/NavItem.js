import React, { useState } from "react";
import Dropdown from "./Dropdown";
import classes from "./Navbar.module.scss";
import useClickOutside from "./Hooks/useClickOutside";

function NavItem(props) {
  const [open, setOpen] = useState(false);
  let elRef = useClickOutside(() => setOpen(false));

  return (
    <li ref={elRef}>
      <span className={classes.navbar__item} onClick={() => setOpen(!open)}>
        {props.item}
        {props.item === "facility use" || props.item === "contact" ? (
          ""
        ) : (
          <img
            src="/img/caret-down-fill.svg"
            alt="open submenu down arrow"
            className={classes.navbar__arrow}
          />
        )}
      </span>
      {open && <Dropdown subitem={props.linkData} />}
    </li>
  );
}

export default NavItem;
