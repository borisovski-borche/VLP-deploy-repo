import classes from "./ComapnyLogo.module.scss";

const CompanyLogo = () => {
  return (
    <div className={classes.logoContainer}>
      <img src="/img/sedc-logo.png" alt="SEDC Logo" />
      <p>SEAVUS EDUCATION and DEVELOPMENT CENTER</p>
    </div>
  );
};

export default CompanyLogo;
