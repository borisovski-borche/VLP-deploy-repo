import { Fragment } from "react";
import AcademyCarousel from "../AcademyCarousel/AcademyCarousel";
import CompetenciesBox from "../CompetenciesBox/CompetenciesBox";
import ExpansionPanel from "../UI/ExpansionPanel/ExpansionPanel";
import classes from "./AcademiesLayout.module.scss";

const AcademiesLayout = props => {
  const { academy, isModalOpen, toggleModal } = props;

  return (
    <Fragment>
      {!academy.title ? (
        <div>Loading...</div>
      ) : (
        <div className={classes.academyContainer}>
          <h2 className={classes.title}>{academy.title}</h2>

          <div className={classes.icons}>
            <div className={classes.iconsDiv}>
              <img
                className={classes.moneyIcon}
                src="/img/money-icon.svg"
                alt=""
              />
              <span className={classes.iconSpan}>{academy.price} &euro;</span>
            </div>

            <div className={classes.iconsDiv}>
              <img
                className={classes.calendarIcon}
                src="/img/calendar-icon.svg"
                alt=""
              />
              <span className={classes.iconSpan}>
                {academy.timeline?.duration}
              </span>
            </div>

            <div className={classes.iconsDiv}>
              <img
                className={classes.timeIcon}
                src="/img/time-icon.svg"
                alt=""
              />
              <span className={classes.iconSpan}>
                {academy.timeline?.classes}
              </span>
            </div>
          </div>

          <div className={classes.courseInfoDiv}>
            <div className={classes.aboutCourseDiv}>
              <p>{academy.overview}</p>
            </div>

            <div className={classes.timelineDiv}>
              <h3>Timeline</h3>

              {academy.timeline?.semesters.map(timeline => {
                return (
                  <div key={timeline.list_title}>
                    <p>{timeline.list_title}:</p>
                    <ul>
                      {timeline.list_data.map((listItem, i) => (
                        <li key={i}>{listItem}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              {/* {academy.timeline?.semesters.map(data =>
                data.list_data.map((list, i) => <li key={i}>{list}</li>)
              )} */}

              <p>{academy.timeline?.lectures}</p>
            </div>
          </div>

          {/* <AccordionApp
            academy={academy}
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
          /> */}

          <AcademyCarousel academyData={academy} />

          <ExpansionPanel
            title="Study Program"
            summary=""
            startingHeight="200px"
          >
            <div>Cards Placeholder</div>
          </ExpansionPanel>

          <CompetenciesBox>
            <div className={classes.competenciesList}>
              {academy.competencies.list_data.map((data, i) => (
                <div key={i}>
                  <span className={classes.checkSign}></span>
                  <li key={i} className={classes.competenciesListItem}>
                    {data}
                  </li>
                </div>
              ))}
            </div>
          </CompetenciesBox>

          <br />

          <div className={classes.registrationContainer}>
            <div className={classes.termsDiv}>
              <h2 className={classes.h2Tag}>
                Terms and documents for registration
              </h2>
              <p className={classes.pTag}>
                Anyone who has completed at least High school can enroll at the
                Academies.
                <br />
                For enrollment at the Academy the prospective students should
                fill Application for registration and sign a Contract on
                tuition.
              </p>
              <h2 className={classes.h2Tag}>Scholarship opportunities</h2>
              <p>Challenge Day(mid of June)</p>
              <p>6 full/ 10 half Scholarships (based on a competition)</p>
            </div>
            <div className={classes.tableDiv}>
              <h2 className={classes.h2Tag}>
                Discounts for early registration
              </h2>
              <table className={classes.priceTable}>
                <thead>
                  <tr className={classes.tableRow}>
                    <th className={classes.tableHeader}>Type of Payment</th>
                    <th className={classes.tableHeader}>April 1st</th>
                    <th className={classes.tableHeader}>May 15th</th>
                    <th className={classes.tableHeader}>July 15th</th>
                    <th className={classes.tableHeader}>Sept 15th</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={classes.tableRow}>
                    <td className={classes.tableCell}>
                      Discount for payment up to "x" installments
                    </td>
                    <td className={classes.tableCell}>400&euro;</td>
                    <td className={classes.tableCell}>250&euro;</td>
                    <td className={classes.tableCell}>100&euro;</td>
                    <td className={classes.tableCell}>none</td>
                  </tr>
                  <tr className={classes.tableRow}>
                    <td className={classes.tableCell}>Cash Payment</td>
                    <td className={classes.tableCell}>500&euro;</td>
                    <td className={classes.tableCell}>350&euro;</td>
                    <td className={classes.tableCell}>200&euro;</td>
                    <td className={classes.tableCell}>200&euro;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={classes.programDiv}>
            <h2 className={classes.h2Tag}>Program package includes</h2>

            <span className={classes.checkSign}></span>
            <p>Learning materials</p>
            <span className={classes.checkSign}></span>
            <p>Career Counseling & Mentorship</p>
            <span className={classes.checkSign}></span>
            <p>Art Materials included (for Design Academy)</p>
            <span className={classes.checkSign}></span>
            <p>Certificates</p>
            <span className={classes.checkSign}></span>
            <p>
              Loyalty Card - Loyalty Program with discounts and benefits for
              students and family members
            </p>
            <span className={classes.checkSign}></span>
            <p>Alumni Community Membership</p>
            <span className={classes.checkSign}></span>
            <p>
              Access to conference and events/Competitions/Match making events
              with Industry
            </p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AcademiesLayout;
