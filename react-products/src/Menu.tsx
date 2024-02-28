import { NavLink } from "react-router-dom";

export default function Menu(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-bright titleNavbar">
            <div className="container-fluid navbarDiv">
                <NavLink className="navbar-brand" to="/">React Products</NavLink>
                <div>
                </div>
            </div>
        </nav>
    )
}
