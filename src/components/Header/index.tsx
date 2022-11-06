import styles from './index.module.scss'
import { HeaderProps } from './interfaces'

export default function Header({ onClose }: HeaderProps) {
    return (
        <header className={styles.header}>
            <img src='rickandmorty.png' className={styles.imgLogo} alt={'rick-and-morty'} />
            <input className={styles.input} onChange={onClose} placeholder='Busque pelo nome'/>
        </header>
    )
}