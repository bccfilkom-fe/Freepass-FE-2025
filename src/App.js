import "./App.css"
import { getListFilm, cariFilm } from "./api"
import { useEffect, useState } from "react"

const App = () => {
  const [popularFilms, setPopularFilms] = useState([])

  useEffect(() => {
    getListFilm().then((result) => {
      setPopularFilms(result)
    })
  }, [])

  const PopulerFilmuyyy = () => {
    return popularFilms.map((film, i) => {
      return (
        <div className="moviewrapper" key={i}>
          <div className="movietitle">{film.title}</div>
          <img className="movieimage" src={`${process.env.REACT_APP_URLBASEGAMBAR}/${film.poster_path}`} />
          <div className="movietanggal">Release: {film.release_date}</div>
          {/* <div className="moviebintang">Rating: {film.vote_average}</div> */}
        </div>
      )
    })
  }

  const search = async(q) => {
    if (q.length > 3) {
      const querywaw = await cariFilm(q)
      setPopularFilms(querywaw.results)
      console.log({ yangquery: querywaw})
    }
  }

  console.log({ populerfilms: popularFilms })

  return (
    <div className="App">
      <header className="App_header">
        <h1 className="judul">Mansur Film Store</h1>
        <input placeholder="Cari Film Kamu Ngab" className="moviesearch" onChange={({ target }) => search(target.value)} />
        <div className="moviecontainer">
          <PopulerFilmuyyy />
        </div>
      </header>
    </div>
  );
}

export default App;

