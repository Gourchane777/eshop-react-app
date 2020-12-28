import './App.css';
import AddProduct from './components/add-product/addProduct';
import Header from './components/Header/header';
import ListProduct from './components/listProduct/ListProduct';


function App() {
  return (
    <div >
      <Header />
      <main className="container mt-5">
     <AddProduct />
     <ListProduct />
      </main>
    </div>
  );
}

export default App;
