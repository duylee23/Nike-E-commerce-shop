import path from "./utils/paths"
import { Routes, Route } from "react-router-dom";
import {Home, Admin} from "./pages"
import { Header, Footer, UserList } from './components';
function App() {


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={path.PUBLIC} element={<Home/>}></Route>
        <Route path={path.ADMIN} element={<Admin/>}>
          <Route path={path.USER} element={<UserList/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
