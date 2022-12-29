import { ArrowRight } from '../../assets/icons/ArrowRight';
import styles from './index.module.scss'
import { PageProps } from './interfaces';

export default function({pageNext, pagePrev, page}:PageProps) {

  return (
    <div className={styles.contant}>
    {page > 1 &&
      <button className={styles.avan} onClick={pagePrev}>
        <ArrowRight />
      </button>
    }
    {page < 42 &&
      <button className={styles.prox} onClick={pageNext}>
        <ArrowRight />
      </button>
    }
  </div>
  )
}