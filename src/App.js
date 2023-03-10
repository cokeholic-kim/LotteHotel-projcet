import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SpDetailContainer from './container/SpDetailContainer';
import SpecialContainer from './container/SpecialContainer';
import JoinPage from './member/JoinPage';
import Main from './pages/main';
import Login from './member/Login';
import IdFind from './member/IdFind';
import PassFind from './member/PassFind';
import EditPassword from './member/EditPassword';
import WriteEvent from './pages/WriteEvent';
import WriteRoom from './pages/WriteRoom';
import RoomContainer from './container/RoomContainer';
import RoomDetailContainer from './container/RoomDetailContainer';
import Example from './pages/Example';
import Reservation from './pages/Reservation';

function App() {  

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path="/special" element={<SpecialContainer isMain={false} limits={10}/>}/>
          <Route path='/special/:no' element={<SpDetailContainer/>}/>
          <Route path="/join" element={<JoinPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/findid" element={<IdFind/>}/>
          <Route path="/findpass" element = {<PassFind/>}/>
          <Route path="/updatePassword" element={<EditPassword/>}/>
          <Route path="/writeevent" element={<WriteEvent/>}/>
          <Route path="/writeroom" element={<WriteRoom/>}/>
          <Route path="/room" element={<RoomContainer/>}/>
          <Route path="/roomdetail/:no" element={<RoomDetailContainer/>}/>
          <Route path="/test" element={<Example/>}/>
          <Route path="/reservation/*" element={<Reservation/>}/>
        </Routes>    
      <Footer/>
    </div>
  );
}

export default App;
