import React, { useEffect, useState } from 'react'
import ArtistsList from '../ArtistsList/ArtistsList'
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ArtistsListContainer = () => {
    const [artists, setArtists] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const db = getFirestore()
        const itemsCollection = collection(db, "items")
        getDocs(itemsCollection)
        .then((snapshot) => {
            const artistsList = []
            const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}) )
            data.forEach(item => {
                const existingArtist = artistsList.some((a)=> a === item.artist)
                if (!existingArtist && item.artist !== 'Anónimo'){
                    artistsList.push(item.artist)
                }
            })
        setArtists(artistsList)
        })
        .catch((err) => console.log(err))
        .finally(setLoading(false))
    },[])

  return (
    <ArtistsList artists={artists} loading={loading} />
  )
}

export default ArtistsListContainer