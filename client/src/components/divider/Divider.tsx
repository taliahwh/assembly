// Styles
import styles from './divider.module.scss';

type DividerProps = {
  children: string;
};

const Divider = ({ children }: DividerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.border} />
      <span className={styles.content}>{children}</span>
      <div className={styles.border} />
    </div>
  );
};

export default Divider;
