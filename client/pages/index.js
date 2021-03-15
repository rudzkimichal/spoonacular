import Head from 'next/head';
import SearchInput from '../components/SearchInput';


const Index = () => {
  return (
    <>
      <Head>
        <title>Spoonacular</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <SearchInput />
      </main>

      <footer >
      </footer>
    </>
  )
}

export default Index;
