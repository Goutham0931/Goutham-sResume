import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ButtonAppBar from './NavBar'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Hello ! This is Goutham</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ButtonAppBar/>
      
    </div>
  )
}
