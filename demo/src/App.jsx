import './App.css'
import ProductCard from './components/ProductCard/ProductCard'

const App = () => {
 
  const showAlert1 = () => {
    alert("alert1")
  }

  const showAlert2 = () => {
    alert("alert2")
  }

  return (
    <>
     <ProductCard
      avatar={"https://picsum.photos/80"}
      cardLabel={"Ant Collector"}
      cardTitle={"card1"}
      cardDescription={"lorem bbjlasbkahdbckjbackdlkdbcj"}
      showAlert={showAlert1}
    />

    <ProductCard
      avatar={"https://picsum.photos/80"}
      cardLabel={"Pippo"}
      cardTitle={"card2"}
      cardDescription={"description2"}
      showAlert={showAlert2}
    />
    </>
  )
}

export default App
