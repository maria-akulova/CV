import style from './Education.module.scss';
export const Education: React.FC = () => {
  return (
    <>
      <div className={style.year}>Sep 2004</div>
      <div className={style.degree}>
        Bachelor of Science: Management Information Systems, General
        <div>Maharishi International University</div>
      </div>

      <div className={style.year}>July 1999</div>
      <div className={style.degree}>
        Master of Science: Department of Ecology, Heat Engineering
        <div>Nacional&lsquo;na Metallurgijna Akademija Ukraini - Dnipro, Ukraine</div>
        <div>
          Fields of Study: Department of Ecology, Heat Engineering, Occupational Safety and Health
        </div>
      </div>
    </>
  );
};
