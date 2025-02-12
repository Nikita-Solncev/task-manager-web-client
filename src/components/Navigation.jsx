import "./Navigation.css"
import { useAuth } from "../context/AuthContext";

export function Navigation() {
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        window.location.reload();
    };

    return (<nav className="navbar">
        <div className="navbar-left">
            <button className="nav-button">Home</button>
            <button className="nav-button">Something</button>
            <button className="nav-button">Profile</button>
        </div>
        <div className="navbar-right">
            {!isAuthenticated ? (
                <>
                    <button className="nav-button sign-in">Sign In</button>
                    <button className="nav-button log-in">Log In</button>
                </>
            ) : (
                <button className="nav-button log-out" onClick={handleLogout}>
                    Log Out
                </button> 
            )}
        </div>
    </nav>)
}
