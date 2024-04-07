import { Route, Routes } from 'react-router-dom';
import SignUp from './assets/components/SignUp';
import Landinpage from './pages/landingPage/LandingPage';
import { AuthContextProvider } from './assets/context/AuthContext';
import Account from './assets/components/Account';
import Home from './pages/Home';
import { MyProfile } from './pages/MyProfile';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Landinpage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
