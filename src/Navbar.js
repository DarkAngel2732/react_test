import logo from './images/logo.png'
import './css/Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt='travel-creators-logo' className='navbar--logo'></img>
            <div className='navbar--info'>
                <a>About Us</a>
                <a>FAQs</a>
                <a>Become a travel creator</a>
                <button className='navbar--login'>Log in</button>
                <button className='navbar--signup'>Sign up</button>
            </div>
        </nav>
    )
}