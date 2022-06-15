import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/home';
import { UserInfo } from './Components/User/UserInfo';
import { Error } from './Components/Error/error';
import { Summary } from './Components/Summary/summary';

function App() {
  return (
    <>
    <Routes>
      <Route path="/user-info" element={<UserInfo />} />
      <Route path="/summary" element={<Summary />} />
      <Route path='/error' element={<Error/>} />
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
