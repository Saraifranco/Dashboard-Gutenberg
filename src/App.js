
import './assets/css/app.css'
import './assets/css/tablaProducts.css'
import TopBar from "./components/topBar";
import TablaProducts from './components/tablaProducts';
import TablaUsers from './components/tablaUsers';
import LastProducts from './components/lastProducts';
import TablaCategories from './components/tablaCategories';
import TablaTotals from './components/tablaTotals'
//import Footer from "./components/footer";

function App() {
  return (
  <div>
    <TopBar/>
    <div>
    <TablaProducts/>
    </div>
    <div>
    <TablaCategories/>
    </div>
    <LastProducts/>
    <TablaUsers/>
    <TablaTotals/>
  </div>
  );
}

export default App;
