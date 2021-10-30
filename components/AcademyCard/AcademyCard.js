import Link from "next/link";
import classes from "./AcademyCard.module.scss";

const AcademyCard = (props) => {
  const { academy } = props;
  const showIcon = true;

  return (
    <Link
      href={`/${academy.id}/${academy.study_programs[0].id}`}
      key={academy.id}
    >
      <div className={classes.academyCard}>
        {showIcon ? (
          <img
            className={classes.academyIcon}
            src={`/img/cards-icons/color/${academy.id}.png`}
          />
        ) : (
          <> </>
        )}

        <a>{academy.title.replace("Academy For ", "")}</a>
      </div>

    </Link>
  );
};

export default AcademyCard;
