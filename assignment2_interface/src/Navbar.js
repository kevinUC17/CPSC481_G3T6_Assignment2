import './Navbar.css';
import { ReactComponent as Search } from './assets/navbar/SearchIcon.svg';
import { ReactComponent as Toolbar } from './assets/navbar/Toolbar.svg';
import { ReactComponent as UserIcon } from './assets/navbar/UserIcon.svg';

export default function Header() {
    return (
        <header>
        <nav>
          <ul>
            <li><a id = "textLink" href="#home">Home</a></li>
            <li><a id = "textLink" href="#about">About Us</a></li>
            <li><a id = "textLink" href="#contact">Contact</a></li>
            <div>
              <li><a href="#home"><Search id = "icon"/></a></li>
              <li><a href="#home"><UserIcon id = "icon"/></a></li>
              <li><a href="#home"><Toolbar id = "icon"/></a></li>
            </div>
          </ul>
        </nav>
      </header>
    );
}