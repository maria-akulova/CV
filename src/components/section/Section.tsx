'use client';
import { ReactNode } from 'react';
import { Title } from '../title/Title';

interface SectionTileProp {
  title: string;
  fileImage: string;
  children: ReactNode;
}

export const Section: React.FC<SectionTileProp> = ({ title, fileImage, children }) => {
  return (
    <div className="section">
      <Title titleName={title} src={fileImage}>
        <div>{children}</div>
      </Title>
    </div>
  );
};
