import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SpDetailContainer from './container/SpDetailContainer';
import Main from './pages/main';

function App() {  

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/special/:no' element={<SpDetailContainer/>}/>
        </Routes>    
      <Footer/>
    </div>
  );
}

export default App;
