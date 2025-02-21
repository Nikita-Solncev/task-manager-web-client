import { Navigation } from "../Navigation/Navigation";
import { useAuth } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";

export function Layout({ children }) {
    const location = useLocation();
    const hideNavigation = ['/login', '/register'].includes(location.pathname);

    return (
    <>
        {!hideNavigation && <Navigation />}
        <main>{children}</main>
    </>
    )
}