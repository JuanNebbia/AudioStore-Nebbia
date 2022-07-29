export const getItem = new Promise((resolve) => {
    setTimeout(()=> {
        resolve(fetch('https://62e16660e8ad6b66d848fbe1.mockapi.io/api/products')
        .then((res) => res.json())
        )},2000)
    
})


