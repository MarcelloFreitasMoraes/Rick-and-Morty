import axios from "axios";
import Head from "next/head";
import { SetStateAction, useEffect, useState } from "react";
import styles from "../../styles/Home.module.scss";
import Cards from "../components/Card";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

export default function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [resposta, setResposta] = useState();
  const baseURL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => setResposta(response?.data?.results))
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, [baseURL]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Marty</title>
        <meta name="description" content="Projeto Rick and Marty " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        onClose={(e: { target: { value: SetStateAction<string> } }) =>
          setSearch(e.target.value)
        }
      />
      <section className={styles.card}>
        {resposta &&
          Object.values(resposta).map((characters: any) => {
            return <Cards data={characters} key={characters.id} />;
          })}
      </section>

      <div className={styles.contant}>
        <Pagination
          pageNext={() => setPage(page + 1)}
          pagePrev={() => setPage(page - 1)}
          page={page}
        />
      </div>
    </div>
  );
}
