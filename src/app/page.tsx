import { Footer } from '@/components/footer/Footer';
import { Fragment } from 'react';
import { Header } from 'src/components/header/Header';
import style from './page.module.css';
import { Section } from '@/components/section/Section';
import { WorkContent } from '@/components/work-content/WorkContent';
import { SectionTileContent } from '@/components/section-tile/SectionTileContent';
import { Education } from '@/components/education/Education';
import { Certification } from '@/components/certification/Certification';

export default function Home() {
  return (
    <Fragment>
      <Header></Header>
      <main className={style.main}>
        <SectionTileContent></SectionTileContent>
        <Section title="work experience" fileImage="/work-case-svgrepo-com.svg">
          <WorkContent></WorkContent>
        </Section>
        <Section title="Education" fileImage="/work-case-svgrepo-com.svg">
          <Education></Education>
        </Section>
        <Section title="Certification" fileImage="/work-case-svgrepo-com.svg">
          <Certification></Certification>
        </Section>
      </main>
      <Footer></Footer>
    </Fragment>
  );
}
