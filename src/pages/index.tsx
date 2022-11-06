import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.scss'
import Cards from '../components/Card';
import Header from '../components/Header';
//import getServerSideProps from './config/[api]';

export default function Home({data}:any) {

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')  
  const [infos, setInfos] = useState()
  const [resposta, setResposta] = useState()
  const baseURL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;

  useEffect(() => {
        axios.get(baseURL).then((response) => setResposta(response?.data?.results))
        //.then((res) => setInfos(res?.data?.info))
        .catch(function (error) {
          console.log(error.toJSON());
        });
       
  }, [baseURL])
  console.log(resposta, "infos");

  // useEffect(() => {
  //   getServerSideProps();
  // }, [page, search]);

  return (
    <div className={styles.container}>
    <Head>
      <title>Rick and Marty</title>
      <meta name="description" content="Projeto Rick and Marty " />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header onChange={(e: any) => setSearch(e.target.value)}/>
    <section className={styles.card}>         
      {resposta &&
          Object.values(resposta).map((item: any) => {
        return (
            <Cards data={item} key={item.id}/>
        )
      })}
    </section>

    {page < 42 &&
      <p onClick={() => setPage(page + 1)}>Próximo</p>
    }
    {page > 1 &&
      <p onClick={() => setPage(page - 1)}>Anterior</p>
    }
  </div>
  )
}