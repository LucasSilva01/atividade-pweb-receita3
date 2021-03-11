import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className = {styles.container}>
        <Link href = '/movies' >
         <a className = {styles.card}>Clique para ver todos os filmes da marvel</a>
        </Link>
    </div>
  )
}
