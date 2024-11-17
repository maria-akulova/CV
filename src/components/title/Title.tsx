import Image from 'next/image';
import style from './Title.module.scss';
import { Fragment, ReactNode } from 'react';

interface TitleProps {
  titleName: string;
  src: string;
  children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({ titleName, src, children }) => {
  return (
    <>
      <div className={style.section_title}>
        <Image src={src} alt={titleName} width={40} height={40} className={style.title_image} />
        <span>{titleName}</span>
      </div>
      {children}
    </>
  );
};
