import React from "react";
import classes from "./Navbar.module.scss";
import NavItem from "./NavItem";
import linkData from "./link-data";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navbar__nav}>
        <NavItem item="about us" linkData={linkData.aboutUsItems} />
        <NavItem item="academies" linkData={linkData.academyItems} />
        <NavItem item="courses" linkData={linkData.coursesItems} />
        <NavItem item="accelerator" linkData={linkData.acceleratorItems} />
        <NavItem item="testing" linkData={linkData.testingItems} />
        <a
          href="https://www.sedc.mk/facilty-use/"
          target="_blank"
          className={classes.navbar__item}
        >
          facility use
        </a>
        <a
          href="https://www.sedc.mk/contact-us/"
          target="_blank"
          className={classes.navbar__item}
        >
          contact
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
