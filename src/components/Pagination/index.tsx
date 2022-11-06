import styles from './index.module.scss'

export default function Pagination({ infos, onNext, onPrev }:any) {
    return (
        <div data-testid='pagination' className={styles.container}>
            {infos?.prev &&
                <button data-testid='prev' className={styles.prev} onClick={onPrev}>
                    <img alt='arrow' src="arrow.svg" />
                </button>
            }
            {infos?.next &&
                <button data-testid='next' className={styles.next} onClick={onNext} disabled={true}>
                    <img alt='arrow' src="arrow.svg" />
                </button>
            }
        </div>
    )
}