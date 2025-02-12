import { Navigation } from "./Navigation";
import { useAuth } from "../context/AuthContext";

export function Layout({ children }) {
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    return (
    <>
        <Navigation />
        <main>{children}</main>
    </>
    )
}