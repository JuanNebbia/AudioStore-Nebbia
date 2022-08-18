import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId, artist } = useParams()

    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection(db, "items")
        if (categoryId && !artist){
            const q = query(itemsCollection, where("genres", "array-contains", categoryId));
            getDocs(q).then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
                setProducts(data)})
                .catch((err) => console.log(err))
                .finally(setLoading(false))
        }else if(artist){
            const q = query(itemsCollection, where("artist", "==", artist));
            getDocs(q).then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})); 
                setProducts(data)})
                .catch((err) => console.log(err))
                .finally(setLoading(false))
        }else{
            getDocs(itemsCollection)
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})); 
                setProducts(data)})
            .catch((err) => console.log(err))
            .finally(setLoading(false))
        }
        },[categoryId, artist])

       

    return (
        <div className='item-list-container-container' style={{minHeight: '100vh'}}>
            { loading ? <Loader /> 
            : <ItemList items = {products} categoryId= {categoryId} artist={artist}/> }
        </div>
    )
}

export default ItemListContainer;