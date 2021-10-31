import Head from "next/head";

import AcademyCard from "../components/AcademyCard/AcademyCard";

import classes from "../styles/HomePage.module.scss";

import axios from "axios";
import { Fragment } from "react";

export default function HomePage(props) {
  const { academies } = props.data;
  console.log(academies);

  return (
    <Fragment>
      <Head>
        <link rel="icon" type="image/png" href="/img/sedc-logo.png" />
        <title>SEDC - Academies</title>
      </Head>
      <div>
        <div className={classes.heroDiv}>
          <div>
            <h1>10 Years Changing Lives</h1>
            <h4>
              Master the most requested skills with the help of real experts
            </h4>
          </div>
          <img src="./img/heroimg.jpg" alt="heroimg" />
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.academyRates}>
            <div className={classes.academyRate}>
              <h1>75%</h1>
              <h4>students employment rate</h4>
            </div>
            <div className={classes.academyRate}>
              <h1>30+</h1>
              <h4>partner companies involved in the program</h4>
            </div>
            <div className={classes.academyRate}>
              <h1>50+</h1>
              <h4>student's project implementation in the last 5 years</h4>
            </div>
          </div>
          <h1 className={classes.availableAcademiesTitle}>
            Available academies
          </h1>
          <div className={classes.academyCardContainer}>
            {academies.map(academy => (
              <AcademyCard academy={academy} key={academy.id} />
            ))}
          </div>
          <div className={classes.copyrightTextContainer}></div>
        </div>
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const response = await axios.get("https://vlp-data.herokuapp.com/academies");

  return {
    props: {
      data: response.data,
    },
  };
}
