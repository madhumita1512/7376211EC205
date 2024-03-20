
import Header from './Header'
import Companies from './Companies'
import Register from './Register'

function App() {
  const products =[{
    "productName":"Laptop1",
    "price":2236,
    "rating":4.7,
"discount":63,
"availability":"yes"
  },
  {
    "productName":"Laptop13",
    "price":1244,
    "rating":4.5,
"discount":45,
"availability": "out-of-stock"
  },
  {
    "productName":"Laptop3",
    "price":9102,
    "rating":4.44,
"discount":98,
"availability":"out-of-stock"
  },{
    "productName":"Laptop3",
    "price":9102,
    "rating":4.44,
"discount":98,
"availability":"out-of-stock"
  },]

  return (
    <>
    <Header />
    <div className='products'>
    {products.map((item)=>{
      return <Companies  key={item.productName}{...item}/>
    })}
    </div>
    <Register />
    </>
  )
}

export default App
