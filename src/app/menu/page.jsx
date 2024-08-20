import Header from '../components/header/header'; // Ajusta la ruta si es necesario
import Navbar from '../components/navbar/navbar'; // Ajusta la ruta si es necesario
import Link from 'next/link'; // Asegúrate de importar Link desde next/link
import './menu.css'; // Asegúrate de tener un archivo de estilos para el menú

function Menu() {
    return (
        <div>
            <Header />
            <Navbar></Navbar>
            <nav className='menu'>
                <div className='menu-container'>
                    <h1>Menú Principal</h1>
                    <ul className='menu-links'>
                        <li>
                            <Link href="/licences" className='button-link'>Agregar Licencia</Link>
                        </li>
                        <li>
                            <Link href="/curso" className='button-link'>Agregar Curso</Link>
                        </li>
                        <li>
                            <Link href="/questions" className='button-link'>Preguntas</Link>
                        </li>
                        <li>
                            <Link href="/intro" className='button-link'>Información del Curso</Link>
                        </li>
                        <li>
                            <Link href="/certificado" className='button-link'>Certificado</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Menu;
