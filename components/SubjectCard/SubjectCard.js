import classes from ".//SubjectCard.module.scss";

const SubjectCard = ({ cardData }) => {
  console.log(cardData);

  return (
    <div className={classes.card}>
      <h3>{cardData.title}</h3>
      <a className={classes.detailsLink}>
        <span>Details</span>
      </a>
    </div>
  );
};

export default SubjectCard;
