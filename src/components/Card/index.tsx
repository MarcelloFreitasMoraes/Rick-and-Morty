import styles from './index.module.scss'
import { CardProps } from './interfaces'

export default function Cards({ data }: CardProps) {

    return (
        <div className={styles.container}>
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.image} className={styles.image} alt={'Personagens'} />
                <h2>{data.name}</h2>
                <p>STATUS: {data?.status}</p>
                <p>GENDER: {data?.gender}</p>
                <p>SPECIES: {data?.species}</p>
        </div>
    )
}