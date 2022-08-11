import React, { useEffect, useState } from 'react'
import GenresList from '../GenresList/GenresList'

const GenresListContainer = () => {
    const [genres, setGenres] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://62e16660e8ad6b66d848fbe1.mockapi.io/api/products')
        .then((res) => res.json())
        .then((data)=> {
            const genresList = []
            data.forEach(item => {
                item.genres.forEach(gen =>{
                    const existingGenre = genresList.some((g)=> g === gen)
                    if (!existingGenre){
                        genresList.push(gen)
                    }
                })
            });
            setGenres(genresList)
        })  
        .catch((err)=> console.log(err))
        .finally(setLoading(false))
    }, [])
  return (
    <GenresList genres={genres} loading={loading} />
  )
}

export default GenresListContainer