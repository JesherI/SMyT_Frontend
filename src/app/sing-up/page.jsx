import Header from '../components/header/header';
import Link from 'next/link';
import "./estilos.css"; 
import "../global.css";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <div className="contenedor__todo">
        <div className="caja__trasera">
          <div className="caja__trasera-register">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>Inicia sesión para entrar en la página</p>
            <Link href="/login">
              <button id="btn__iniciar-sesion">Iniciar Sesión</button>
            </Link>
          </div>
          <div className="contenedor__login-register">
            <form action="" className="formulario__login">
              <h2>Registrarse</h2>
              <div className="formulario">
                <input type="text" placeholder="Nombre(s)" />
                <input type="text" placeholder="Apellido Paterno" />
                <input type="text" placeholder="Apellido Materno" />
                <input type="text" placeholder="Correo Electrónico" />
                <input type="text" placeholder="CURP" />
                <input type="password" placeholder="Contraseña" />
              </div>
              <button>Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
