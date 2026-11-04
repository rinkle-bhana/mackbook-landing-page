import {navLinks} from '../constants';

const NavBar = () => {
  return (
    <header>

        <nav>
            <a href="/">
                <img src="/logo.svg" alt="Logo" />
            </a>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.label}>
                        <a href="{link.label}">{link.label}</a>
                    </li>
                ))}
            </ul>

            <div className="flex-center gap-3">
                <img src="/search.svg" alt="Search" />
                <img src="/cart.svg" alt="Cart" />
            </div>
        </nav>
    </header>
  );
}

export default NavBar;