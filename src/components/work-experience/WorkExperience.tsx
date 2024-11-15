'use client';

import { useState, useEffect } from 'react';
import style from './WorkExperience.module.scss';

interface WorkExperienceProp {
  role: string;
  company: string;
  year: string;
  place: string;
  fileSrc: string;
}
export const WorkExperience: React.FC<WorkExperienceProp> = ({
  role,
  company,
  year,
  place,
  fileSrc,
}) => {
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
    <>
      <div className={style.role}>{role}</div>
      <div className={style.company}>{company}</div>
      <div className={style.year_place}>
        <span>{year}</span>
        <span>{place}</span>
      </div>
      <ul className={style.list_items}>
        {listOfItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
