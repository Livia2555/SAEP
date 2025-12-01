import { Link, useNavigate } from 'react-router-dom';
import "./NavBar.css";

export function Navbar() {
 const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        navigate('/');
    };

    return (
        <nav className="containe">
            <ul className="barra">
                <li><Link to="/Estoque">Estoque</Link></li>
                <li><Link to="/Historico">Histórico</Link></li>
                <li>
                    <button onClick={handleLogout} className="logout">
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
}