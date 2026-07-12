import './App.css'
import Title from './Title'
import Product from './Product'
import ProductList from './ProductList'
import Message from './activity/message'
import Cards from "./activity2/amazonCards"
function App() {
  return (
    <>
      {/* <Product/>
      <Product/>
      <Product/>
      <Product/> */}
      {/* <ProductList category={"Mobile Phones"}/> */}
      <Message user="Saikrishna" color="green" />
      <Message user="Nagesh" color="red" />
      {/* <Title></Title>,
      <Title /> */}
      <Cards/>
    </>
  )
}

export default App
