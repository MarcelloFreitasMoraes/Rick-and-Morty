export default async function getServerSideProps() {
    // Fetch data from external API
    const response = await fetch(`https://rickandmortyapi.com/api/character`)
    const data = await response.json()
///?page=${query.page}&name=${query.search}
    //{console.log(data,`data`)}

    return { props: { data } }
    // Pass data to the page via props
  }