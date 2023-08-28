import { Navbar } from './components/Navbar';
import './App.css';
import { Products } from './components/Products';
import { Header } from "./components/Header";
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Products />
      <Footer /> 
    </>
  );
}

export default App;
