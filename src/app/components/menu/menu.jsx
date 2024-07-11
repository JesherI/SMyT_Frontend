import Link from 'next/link';
import './menu.css';

const Menu = () => {
  return (
    <nav className="nav">
     
      <ul className="navLinks">
        <li>
          <Link href="/">SMyT</Link>
        </li>
        <li>
          <Link href="/inicio">Información</Link>
        </li>
        <li className='Registrarse'>
          <Link href="/register">Registrarse</Link>
        </li>
        <li className='Inicio'>
          <Link href="/login">Iniciar Sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
