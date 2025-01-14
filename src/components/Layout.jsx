import { Navigation } from "./Navigation";

export function Layout({ children }) {
    console.log(children)
    return (
    <>
        <Navigation />
        <main>{children}</main>
    </>
    )
}