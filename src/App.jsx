// import './css/styles.css';
import SquareGame from './components/Views/Play/Play';
import Menu from './components/Views/Menu/Menu'
import Video from './components/BackgroundScreen/BackgroundScreen.jsx'
import { Footer } from './components/Footer/Footer';
import LoginRegister from './components/Views/Auth/LogRegScreen/LoginRegister';
import HighScoreTable from './components/Views/HighScoreTable/HighScoreTable';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import { AuthProvider } from './context/authContext';


function App() {

  

  return (
    <BrowserRouter>
      <AuthProvider>
        <>
            <Routes>
              <Route path='/Menu' element={<Menu/>}/>
              <Route path='/Play' element={<SquareGame/>}/>
              <Route path='/HighScores' element={<HighScoreTable/>}/>
              <Route path='/LogRegScreen' element={<LoginRegister/>}/>
              <Route path='/*' element={<Navigate to='/Menu' replace/>}/>
            </Routes>
          </>
        </AuthProvider>
      <Footer/>
      <Video/>
    </BrowserRouter>
  );
}

export default App;
