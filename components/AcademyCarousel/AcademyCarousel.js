import classes from "./AcademyCarousel.module.scss";
import { useState, useEffect } from "react";

import Image from "next/image";
import CarouselList from "./CarouselList/CarouselList";

const AcademyCarousel = ({ academyData }) => {
  const [counter, setCounter] = useState(0);

  const dataList = [
    "job_opportunities",
    "trainers",
    "lab_activities",
    "target_audience",
    "prerequisites",
  ].filter(element => academyData[element]);

  const controlsJsx = dataList.map((element, i) => {
    return (
      <button
        key={i}
        onClick={e => setCounter(-i)}
        style={{
          backgroundColor: counter === -i && "rgba(255, 255, 255, 0.6)",
          borderBottom: counter === -i && "3px solid #004e97",
        }}
      >
        {element
          .split("_")
          .map(el => el[0].toUpperCase() + el.slice(1))
          .join(" ")}
      </button>
    );
  });

  useEffect(() => {}, []);

  const slideJsx = dataList
    .map(item => {
      let data;
      if (item === "trainers") {
        data = (
          <>
            <h2>Trainers</h2>
            <p>{academyData.trainers}</p>
          </>
        );
      } else if (item === "job_opportunities") {
        data = (
          <CarouselList
            list={{
              list_title: "Job Opportunities",
              list_data: academyData.job_opportunities.split(","),
            }}
          />
        );
      } else {
        data = <CarouselList list={academyData[item]} />;
      }
      return (
        <div
          key={item}
          className={classes.carouselSlide}
          style={{ transform: `translateX(${counter}00%)` }}
        >
          <Image
            src={`/img/carousel/${item}.jpg`}
            height="500px"
            width="888px"
            // layout="fill"
          />

          <div className={classes.gradientDiv}></div>
          <div className={classes.dataContainer}>{data}</div>
        </div>
      );
    })
    .filter(el => el);

  return (
    <>
      <div className={classes.carouselContainer}>
        <div className={classes.carouselControls}>{controlsJsx}</div>
        {slideJsx}
      </div>
    </>
  );
};

export default AcademyCarousel;
