import styles from './ShowmoreButton.module.scss'

export default function ShowmoreButton({ link }) {
  return (
    <a
      aria-roledescription="button"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles['button']}
      title="클릭하여 사이트로 이동"
    >더보기</a>
  );
}