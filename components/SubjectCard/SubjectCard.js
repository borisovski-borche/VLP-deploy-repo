import classes from ".//SubjectCard.module.scss";

const SubjectCard = ({ cardData }) => {
  return (
    <div className={classes.card}>
      <h3>{cardData.title}</h3>
      <span className={classes.detailsLink}>Details</span>
    </div>
  );
};

export default SubjectCard;
