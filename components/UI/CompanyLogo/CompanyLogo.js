import Image from "next/image";

import classes from "./ComapnyLogo.module.scss";

const CompanyLogo = () => {
  return (
    <div className={classes.logoContainer}>
      <div className={classes.logoImage}>
        <Image
          src="/img/sedc-logo.webp"
          alt="SEDC Logo"
          height="80px"
          width="80px"
        />
      </div>
      <p className={classes.logoText}>
        SEAVUS EDUCATION and DEVELOPMENT CENTER
      </p>
    </div>
  );
};

export default CompanyLogo;
