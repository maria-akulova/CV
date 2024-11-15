'use client';
import { useEffect, useState } from 'react';
import { Title } from '../title/Title';
import style from './SectionTile.module.scss';
interface SectionTileProp {
  title: string;
  fileSrc: string;
  fileImage: string;
}

export const SectionTile: React.FC<SectionTileProp> = ({ title, fileSrc, fileImage }) => {
  const [listOfItems, setListOfItems] = useState<string[]>([]);

  useEffect(() => {
    fetch(fileSrc)
      .then((res) => res.text())
      .then((data) => {
        const items: string[] = data.split('\n').map((item) => item.trim());
        setListOfItems(items);
      });
  }, [fileSrc]);

  return (
    <div className="section">
      <Title titleName={title} src={fileImage}>
        <div className={style.title_body}>
          {listOfItems.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </Title>
    </div>
  );
};
