import styles from './index.module.scss'
import { CardProps } from './interfaces'

export default function Cards({ data }: CardProps) {

    return (
        <div className={styles.container}>
                <h2>{data?.name}</h2>
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data?.image} className={styles.image} alt={'Personagens'} />
                <p>SPECIES: {data?.species}</p>
                <p>STATUS: {data?.status}</p>
                <p>GENDER: {data?.gender}</p>
        </div>
    )
}