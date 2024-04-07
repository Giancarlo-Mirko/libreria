import { Wrapper2 } from '../theme/generalStyles/generalStyles';
import { ContainerLandingPage } from './sLandingPage';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <ContainerLandingPage>
      <Wrapper2>
        <div>LandingPage</div>
        <br />
        <h1>
          Biembenido a <strong>Entre libros</strong>
        </h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          reiciendis eum recusandae eos assumenda eveniet ratione magnam,
          delectus facere enim illo. Placeat rem quibusdam aut ipsa in nostrum
          commodi fugit!
        </p>
        <br />
        <h2>para iniciar sesion click al boton</h2>
        <Link to="/signup">
          <button type="button">Ir a ruta deseada</button>
        </Link>
      </Wrapper2>
    </ContainerLandingPage>
  );
};

export default LandingPage;
