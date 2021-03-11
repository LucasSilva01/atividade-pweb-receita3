import axios from 'axios'
import styles from '../styles/Home.module.css'

function Index({ movies }) {
  return (
    <div className = {styles.container}>
      <h1>Filmes sobre o Titanic</h1>
      {movies.Search.map(
          (m) => <div className = {styles.card}>
              
              <br/>Título: {m.Title} <br/>Ano de lançamento:  {m.Year}<br/><img src={m.Poster}></img>
              </div>)}
    </div>
  )
}

const Filmes = async function () {
  return await axios.get(
    'http://www.omdbapi.com/?apikey=d72bbb8f&s=Titanic').then(
      function (filmes) {
        return ({
          movies: filmes.data
        })
      }
    )
}


export function getServerSideProps() {
  async function sec(){
    const data = await Filmes();
    return {
      props: data

    }
  }
  return sec();
} 

export default Index;

