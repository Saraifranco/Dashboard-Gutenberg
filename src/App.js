
import './assets/css/app.css'
import TopBar from "./components/topBar";
import TablaProducts from './components/tablaProducts';
import TablaUsers from './components/tablaUsers';
import LastProducts from './components/lastProducts';
//import Footer from "./components/footer";

function App() {
  return (
  <div>
    <TopBar/>
    <div>
    <TablaProducts/>
    </div>
    <div>
     <TablaUsers/>
    </div>
    <LastProducts/>
  </div>
  );
}

export default App;
