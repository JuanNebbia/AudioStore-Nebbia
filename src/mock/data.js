export const getItem = new Promise((resolve) => {
    setTimeout(()=> {
        resolve(fetch('https://62e16660e8ad6b66d848fbe1.mockapi.io/api/products')
        .then((res) => res.json())
        )},2000)
    
})

/*
    //ASÍ LO HACÍA ANTES DE UTILIZAR MOCKAPI. LO DEJO PORLAS

const productsList = [
    { id:'01', title:'Tango beat', artist:'Milonga Piacompañada', genres:['tango', 'electronico'], pictureUrl: 'https://ardea.unvm.edu.ar/wp-content/uploads/2020/10/tango-electronico-01.jpg', price: '250' },
    { id:'02', title:'Preludio para vientos madera', artist:'György Ligeti', genres:['contemporáneo', 'música de cámara'], pictureUrl: 'https://as2.ftcdn.net/v2/jpg/03/77/99/75/1000_F_377997566_s1MMD3TAgPn2mlVqy0kTPtFG2MNYJeR2.jpg', price: '350' },
    { id:'03', title:'Laens Alada', artist:'Juan Nebbia', genres:['piano', 'clásico'], pictureUrl: 'https://www.amadeusescuelademusica.es/wp-content/uploads/2019/03/El-piano-648x365.jpg', price: '200' },
    { id:'04', title:'Der Freischütz', artist:'Carl Maria Von Weber', genres:['ópera'], pictureUrl: 'https://www.staatsoper-stuttgart.de/en/content-images/socialmediashare/7c6dab76aa5d461d0996b95f5b7a8249/6472/der_freischa__tz_der_freischa__tz_2017_18_c_martin_sigmund_sig8238.jpg', price: '700' },
    { id:'05', title:'Katla Soundtrack', artist:'Högni Egilsson', genres:['música de películas', 'ambiental'], pictureUrl: 'https://media.lmneuquen.com/p/bc124fddb8a937b8730b1c72c428eb2c/adjuntos/195/imagenes/006/465/0006465549/1200x675/smart/katla-netflixjpg.jpg', price: '650' },
    { id:'06', title:'Cantos de Ballenas', artist:'Franca Austral', genres:['naturaleza', 'ambiental'], pictureUrl: 'https://www.howtogeek.com/wp-content/uploads/2021/05/whale.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1', price: '2050' },
    { id:'07', title:'4,33', artist:'John Cage', genres:['contemporáneo', 'minimalista'], pictureUrl: 'https://imagenes.elpais.com/resizer/gtJSwJKh9_CumTDbvnL9swMRpAI=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/5AU5VF66BGNFWUEZR3HYAJ7HW4.jpg', price: '2' },
    { id:'08', title:'Its Oh So Quiet', artist:'Bjork', genres:['experimental', 'vanguardia'], pictureUrl: 'https://f4.bcbits.com/img/a4040590719_10.jpg', price: '555' }

]

export const data = new Promise((resolve, reject) =>{
    let condition = true
    setTimeout(()=>{
        if (condition){
            resolve(productsList)
        }else{
            reject('ha ocurrido un error')
        }
    }, 2000)
})
*/


