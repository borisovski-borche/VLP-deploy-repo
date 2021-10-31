import Image from "next/image";

import classes from "./ComapnyLogo.module.scss";

const CompanyLogo = () => {
  return (
    <div className={classes.logoContainer}>
      <Image
        src="/img/sedc-logo.webp"
        alt="SEDC Logo"
        height="100px"
        width="100px"
      />
      <p>SEAVUS EDUCATION and DEVELOPMENT CENTER</p>
    </div>
  );
};

export default CompanyLogo;
