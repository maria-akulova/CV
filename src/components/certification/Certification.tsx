import style from './Certification.module.scss';
export const Certification: React.FC = () => {
  return (
    <div>
      <ul className={style.list_items}>
        <li>
          <span>July 2018 </span> <span>Scrum Master(CSM)</span>
        </li>
        <li>
          <span>Oct 2018 </span> <span>Certified Scrum Product Owner® (CSPO®)</span>
        </li>
        <li>
          <span>Nov 2018 </span> <span>Certified SAFe® 4 Agilist</span>
        </li>
        <li>
          <span>Dec 2018 </span> <span>ICAgile Certified Professional (ICP)</span>
        </li>
        <li>
          <span>Dec 2021 </span> <span>Certified Tester, Foundation Level</span>
        </li>
        <li>
          <span>July 2024 </span> <span>Front-End Developer</span>
        </li>
        <li>
          <span>Sept 2024 </span> <span>React Developer</span>
        </li>
        <li>
          <span>Dec 2024 </span> <span>Node Developer</span>
        </li>
      </ul>
    </div>
  );
};
