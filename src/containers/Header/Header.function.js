import { a11yHidden, resetBoxModel } from 'styles/modules/common.module.scss';
import styles from './Header.module.scss';

/* ----- Compound Component ------------------------------------------------ */

export default function Header({ children }) {
  return (
    <header className={styles['header']}>
      {children}
    </header>
  );
}

Header.LinkedHeading = function LinkedHeading({ link, children }) {
  return (
    <h1 className={resetBoxModel}>
      <a href={link} className={styles['a']}>{children}</a>
    </h1>
  );
};

Header.SearchForm = function SearchForm({ input, placeholder, id, handleInput, handleKeyword }) {
  return (
    <div className={styles['searchForm']}>
      <input
        // value={input}
        className={styles['flexItem']}
        type="text"
        placeholder={placeholder}
        name={id}
        id={id}
        onChange={handleInput}
        onKeyUp={handleKeyword}
      />
      <label htmlFor={id} className={a11yHidden}>{placeholder}</label>
      <button
        type="button"
        className={`${styles['button']} ${styles['flexItem']}`}
        onClick={handleKeyword}
      >검색</button>
    </div>
  );
};
