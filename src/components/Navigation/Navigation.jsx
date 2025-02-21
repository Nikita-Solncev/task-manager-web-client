import "./Navigation.css"
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Navigation() {
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        window.location.reload();
    };

    return (<nav className="navbar">
        <div className="navbar-left">
            <button className="nav-button" onClick={() => navigate("/")}>
                Home
            </button>
            <button className="nav-button" onClick={() => navigate("/projects")}>
                Projects
            </button>
            <button className="nav-button" onClick={() => navigate("/profile")}>
                Profile
            </button>
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
