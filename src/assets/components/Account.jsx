import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <h1>Page Account</h1>
      <p>user:{user && user.email}</p>
      <div>Account</div>

      <button onClick={handleLogout}>logout</button>
    </>
  );
};

export default Account;
