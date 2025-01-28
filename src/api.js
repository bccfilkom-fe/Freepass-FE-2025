import axios from "axios"

const apikey = process.env.REACT_APP_APIKEY
const baseurl = process.env.REACT_APP_URLBASENYA

export const getListFilm = async() => {
    const film = await axios.get(`${baseurl}/movie/popular?page=1&api_key=${apikey}`)
    // console.log({ listFilm: film })
    return film.data.results
}

export const cariFilm = async(q) => {
    const cari = await axios.get(`${baseurl}/search/movie?query=${q}&page=1&api_key=${apikey}`)
     console.log(q)
    return cari.data
}