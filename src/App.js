import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home';
import Next from './Next';
import Help from './Help';
import Start from './Start';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/next" element={<Next/>}></Route>
      <Route path="/help" element={<Help/>}></Route>
      <Route path="/start" element={<Start/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
