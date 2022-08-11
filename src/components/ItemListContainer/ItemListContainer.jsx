import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection(db, "items")
        if (!categoryId){
            getDocs(itemsCollection).then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})); 
                setProducts(data)})
                .catch((err) => console.log(err))
                .finally(setLoading(false))
        }else{
            const q = query(itemsCollection, where("genres", "array-contains", categoryId));
            getDocs(q).then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})); 
                setProducts(data)})
                .catch((err) => console.log(err))
                .finally(setLoading(false))
        }
        },[categoryId])



    return (
        <div className='item-list-container-container' style={{minHeight: '100vh'}}>
            { loading ? <Loader /> : <ItemList items = {products} categoryId= {categoryId}/> }
        </div>
    )
}

export default ItemListContainer;