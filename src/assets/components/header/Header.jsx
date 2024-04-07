import { Link } from 'react-router-dom';
import { WrapperHeader } from '../../../pages/theme/generalStyles/generalStyles';
import { MainHeader, NavHeader } from './style/sHeader';

const Header = () => {
  return (
    <MainHeader>
      <WrapperHeader>
        <NavHeader>
          <div className="Logo">
            <a>xd</a>
          </div>
          <div className="links">
            <ul>
              <Link to="/home">home</Link>
              <Link to="/myprofile">mi perfil</Link>
              <li>Mis Libros</li>
              <li>Libros deseados</li>
              <li>deslogeo</li>
            </ul>
          </div>
        </NavHeader>
      </WrapperHeader>
    </MainHeader>
  );
};

export default Header;
