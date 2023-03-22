// import { Link } from "react-router-dom";
import Auth from '../../utils/auth';
import { CubeAlt } from '@styled-icons/boxicons-regular';
import Link from 'next/link';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };


    return (
            <header>
                <div className="display-flex title-wrapper">
                    <Link href="/">
                        <h1 id="title">NOISEBX</h1>
                        <h1 id="title-mobile">NBX</h1>
                    </Link>
                    <CubeAlt id="cube-icon" />

                </div>

                <nav id="navigation">
                    {Auth.loggedIn() ? (
                        <ul>
                            <li>
                                <Link href="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link href="/" onClick={logout}>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li>
                                <Link href="/Login">Login</Link>
                            </li>
                            <li>
                                <Link href="/signup">Signup</Link>
                            </li>
                        </ul>
                    )}
                </nav>
            </header>
    );
};

export default Header;