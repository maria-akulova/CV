import style from './Header.module.scss';
import Image from 'next/image';

import Email from '../../../public/email-svgrepo-com.svg';
import Phone from '../../../public/phone-rounded-svgrepo-com.svg';
import Geo from '../../../public/pinpoint-svgrepo-com.svg';
import Linkedin from '../../../public/linkedin-rounded-svgrepo-com.svg';
import Github from '../../../public/github-142-svgrepo-com.svg';
import Telegram from '../../../public/telegram-svgrepo-com.svg';

export const Header: React.FC = () => {
  return (
    <>
      <div className={style.header}>
        <div className={style.description}>
          <h1>Maria Akulova</h1>
          <div className={style.job_position}>General Manager</div>
          <p>
            Manager with strong leadership, planning, and organizational skills, honed through a
            successful career managing teams and driving results. Possess a robust technical
            background, allowing for a deep understanding of complex systems and effective
            communication with technical teams. Adept at mentoring and equipping employees to handle
            tasks independently while ensuring alignment with business goals. Seeking a role where I
            can leverage both management and analytical skills alongside technical expertise to
            deliver strategic solutions and foster team growth. Results-driven with a passion for
            continuous improvement and innovation.
          </p>
        </div>
        <div className={style.contacts}>
          <div className={style.links}>
            <p>maria.akulova.dragon@gmail.com</p>
            <p>+32479407977</p>
            <p>1410 Waterloo, Belgium</p>
            <p>
              <a href="https://www.linkedin.com/in/maria-akulova-96b12220/">LinkedIn</a>
            </p>
            <p>
              <a href="https://github.com/maria-akulova">GitHub</a>
            </p>
            <p>
              <a href="https://t.me/MariaAkulova">Telegram</a>
            </p>
          </div>
          <div>
            <p>
              <Email alt="email" width="30" height="30" />
            </p>
            <p>
              <Phone alt="email" width="30" height="30" />
            </p>
            <p>
              <Geo alt="email" width="30" height="30" />
            </p>
            <p>
              <Linkedin alt="email" width="30" height="30" />
            </p>
            <p>
              <Github alt="email" width="30" height="30" />
            </p>
            <p>
              <Telegram alt="email" width="30" height="30" />
            </p>
          </div>
        </div>
      </div>
      <div className={style.back_photo}></div>
      <div className={style.photo}>
        <Image src="/Maria_Akulova.png" alt="personal_photo" width={200} height={300} />
      </div>
      <div className={style.bottom_white}></div>
    </>
  );
};
