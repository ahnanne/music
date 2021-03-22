import ShowmoreButton from 'components/ShowmoreButton/ShowmoreButton.function';
import styles from './Main.module.scss';

export default function Main({ children }) {
  return (
    <Main>{children}</Main>
  );
}

Main.Card = function Card({ title, subtitle, link }) {
  return (
    <div className={styles['container']}>
      <section className={styles['card']}>
        <p className={styles['title']}>{title}</p>
        <p className={styles['subtitle']}>{subtitle}</p>
      </section>
      <ShowmoreButton link={link} />
    </div>
  )
};
