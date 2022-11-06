import styles from './index.module.scss'
import { HeaderProps } from './interfaces'
import Image from 'next/image'

export default function Header({ onClose }: HeaderProps) {
    return (
        <header className={styles.header}>
            <Image  src='/rickandmorty.png' alt={'rick-and-morty'} width={300} height={160} />
            <input className={styles.input} onChange={onClose} placeholder='Busque pelo nome'/>
        </header>
    )
}