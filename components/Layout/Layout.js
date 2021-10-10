import { Fragment } from "react";
import CompanyLogo from "../UI/CompanyLogo/CompanyLogo";
import Navbar from "../UI/Navbar/Navbar";

const Layout = props => {
  return (
    <Fragment>
      <header>
        <CompanyLogo />
        <Navbar />
      </header>
      <main>{props.children}</main>
      {/* <footer>
        <h3>FOOTER PLACEHOLDER</h3>
      </footer> */}
    </Fragment>
  );
};

export default Layout;
