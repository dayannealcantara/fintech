import './Style.css';
import { Sidenav } from './Components/Sidenav';
import { Header } from './Components/Header';
import { Resumo } from './Pages/Resumo';

function App() {
  return (
    <>
      <Sidenav/>
      <div>
        <Header/>
        <Resumo/>
      </div>
    </>
  )
}

export default App;
