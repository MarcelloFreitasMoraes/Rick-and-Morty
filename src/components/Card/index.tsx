import styles from './index.module.scss'

export default function Cards({ data }: any) {

    return (
        <div className={styles.container}>
            <img src={data.image} className={styles.image} alt={'Personagens'} />
                <h2>{data.name}</h2>
                {/* <p>STATUS: {data?.status}</p>
                <p>GENDER: {data?.gender}</p>
                <p>SPECIES: {data?.species}</p> */}
        </div>
    )
}