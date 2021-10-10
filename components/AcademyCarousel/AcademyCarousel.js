import classes from "./AcademyCarousel.module.scss";
import Image from "next/image";

const AcademyCarousel = ({ academyData }) => {
  console.log(academyData);

  return (
    <div className={classes.carouselContainer}>
      <Image
        src="/img/laptop-code.jpg"
        height="500px"
        width="888px"
        layout="intrinsic"
      />
      <div className={classes.gradientDiv}></div>
      <div className={classes.dataContainer}>
        <h2>Job Opportunities</h2>
        {/* <p>{academyData.trainers}</p> */}
        <ul>
          {academyData.job_opportunities.split(",").map(job => (
            <li key={job}>{job}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AcademyCarousel;
