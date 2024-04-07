import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

// import { auth } from '../lib/firebase';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUser(correo, contraseña);
      navigate('/account');

      // Manejar registro exitoso aquí, si es necesario
      // const user = userCredential.user;
      // console.log('Usuario creado:', user);
    } catch (error) {
      // Manejar errores aquí
      // const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error al crear usuario:', errorMessage);
    }
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleContraseñaChange = (event) => {
    setContraseña(event.target.value);
  };

  return (
    <div>
      <h1>Registro</h1>
      <form action="registrar">
        <label htmlFor="correo">Correo:</label>
        <input type="email" value={correo} onChange={handleCorreoChange} />
        <label htmlFor="contraseña">Contraseña:</label>
        <input
          type="password"
          value={contraseña}
          onChange={handleContraseñaChange}
        />
        <button type="button" onClick={handleRegister}>
          Registrar
        </button>
      </form>
    </div>
  );
};

export default SignUp;
