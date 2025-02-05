import "./Navigation.css"
export function Navigation() {
    return (<nav className="navbar">
        <div className="navbar-left">
            <button className="nav-button"></button>
            <button className="nav-button"></button>
            <button className="nav-button"></button>
        </div>
        <div className="navbar-right">
            <button className="nav-button sign-in">Sign In</button>
            <button className="nav-button log-in">Log In</button>
        </div>
    </nav>
)}
