import { WorkExperience } from '../work-experience/WorkExperience';

export const WorkContent: React.FC = () => {
  return (
    <>
      <WorkExperience
        role="Student"
        company=""
        year="July 2023 - Dec 2024"
        place="online"
        fileSrc="./work-experience/student.txt"
      ></WorkExperience>
      <WorkExperience
        role="QA Manager / Test Automation Team Lead"
        company="LeadsMarket"
        year="Aug 2021 - May 2022"
        place="Kyiv, Ukraine"
        fileSrc="./work-experience/leads-market.txt"
      ></WorkExperience>
      <WorkExperience
        role="QA Manager /Assistant Project Manager"
        company="Huuuge Games"
        year="Sep 2020 - Aug 2021"
        place="Kyiv, Ukraine"
        fileSrc="./work-experience/huuge-games.txt"
      ></WorkExperience>
      <WorkExperience
        role="QA Manager"
        company="Ciklum, Metro project (25 QA's)"
        year="Sep 2018 - Sep 2019"
        place="Kyiv, Ukraine"
        fileSrc="./work-experience/ciklum.txt"
      ></WorkExperience>
      <WorkExperience
        role="QA Manager"
        company="Playtika"
        year="Apr 2017 - Sep 2018"
        place="Kyiv, Ukraine"
        fileSrc="./work-experience/playtika.txt"
      ></WorkExperience>
      <WorkExperience
        role="Automation Manager"
        company="EPAM, CanadianTire project"
        year="May 2015 - Mar 2017"
        place="Kyiv, Ukraine"
        fileSrc="./work-experience/epam.txt"
      ></WorkExperience>
    </>
  );
};
