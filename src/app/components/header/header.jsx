import './header.css';
import Image from 'next/image';

function Header() {
    return (
        <header className="index">
            <Image
                className='logo-con-fecha'
                src="/logo-con-fecha.png"
                width={500}
                height={120}
                alt='Logo' />
            <div className="logo-wrapper">
                <Image className='logo-icon'
                    src="/logo.png"
                    width={500}
                    height={500}
                    alt='Logo' />
            </div>
        </header>
    )
}

export default Header;
