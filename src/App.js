import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Navbar from "./component/navbar";
import Map from "./pages/map";
import Intro from "./pages/intro";
import Data from "./crud/data";
import Add from "./crud/tambah";
import Edit from "./crud/edit";
import Catatan from "./pages/catatan";
import Detail from "./crud/detail";
import Login from "./auth/login";
import Register from "./auth/register";
import Api from "./pages/api";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" component={Map} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/data_diri" component={Intro} exact />
            <Route path="/data" component={Data} exact />
            <Route path="/tambah" component={Add} exact />
            <Route path="/catatan" component={Catatan} exact />
            <Route path="/edit/:id" component={Edit} exact />
            <Route path="/detail/:id" component={Detail} exact />
            <Route path="/api" component={Api} exact />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
