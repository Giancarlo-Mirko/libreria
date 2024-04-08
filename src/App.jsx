import { useState, useEffect, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './assets/components/SignUp';
import Landinpage from './pages/landingPage/LandingPage';
import { AuthContextProvider } from './assets/context/AuthContext';
import Account from './assets/components/Account';
import Home from './pages/Home';
import { MyProfile } from './pages/MyProfile';

const AppContext = createContext();
const { Provider: AppProvider, Consumer } = AppContext;

import { getAuth } from 'firebase/auth';

function App() {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState(auth.currentUser || null);
  const [dataOfUser, setDataOfUser] = useState(null);

  useEffect(() => {
    console.log('hola mundo');
    return () => {};
  }, [auth, dataOfUser, currentUser]);

  const appValue = {
    setCurrentUser,
    currentUser,
    setDataOfUser,
    dataOfUser,
  };
  return (
    <>
      <AppProvider value={appValue}>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Landinpage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<Account />} />
            <Route path="/home" element={<Home />} />
            <Route path="/myProfile" element={<MyProfile />} />
          </Routes>
        </AuthContextProvider>
      </AppProvider>
    </>
  );
}

export { App, Consumer, AppContext };
