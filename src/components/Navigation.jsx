import { Link } from "react-router-dom"
import "./Navigation.css"
export function Navigation() {
    return (<nav>
        <ul>
            <Link to="/" className="NavLink">Home</Link>
            <Link to="/profile" className="NavLink">Profile</Link>
        </ul>
    </nav>
)}
