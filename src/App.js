import path from "./utils/paths"
import { Routes, Route } from "react-router-dom";
import {Home, Admin} from "./pages"
import { Header, Footer } from './components';
function App() {
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try{
  //       const res = await axios.get(`http://localhost:8080`)
  //       setProducts(res.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={path.PUBLIC} element={<Home/>}></Route>
        <Route path={path.ADMIN} element={<Admin/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
