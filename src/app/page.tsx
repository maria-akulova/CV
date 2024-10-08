import { BigSection } from '@/components/big-section/BigSection';
import { Footer } from '@/components/footer/Footer';
import { SmallSection } from '@/components/small-section/SmallSection';
import { Fragment } from 'react';
import { Header } from 'src/components/header/Header';
import style from './page.module.css';

export default function Home() {
  return (
    <Fragment>
      <Header></Header>
      <main className={style.main}>
        <SmallSection></SmallSection>
        <BigSection></BigSection>
      </main>
      <Footer></Footer>
    </Fragment>
  );
}
