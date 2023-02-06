import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SpDetailContainer from './container/SpDetailContainer';
import SpecialContainer from './container/SpecialContainer';
import JoinPage from './member/JoinPage';
import Main from './pages/main';
import Login from './member/Login';

function App() {  

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path="/special" element={<SpecialContainer isMain={false}/>}/>
          <Route path='/special/:no' element={<SpDetailContainer/>}/>
          <Route path="/join" element={<JoinPage/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>    
      <Footer/>
    </div>
  );
}

export default App;
