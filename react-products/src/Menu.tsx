import { NavLink } from "react-router-dom";
import Search from "./search/Search";

export default function Menu(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-bright">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">React Products</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category">
                                Category
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    {/* <Search onSearchChange={handleSearchChange}></Search> */}
                </div>
            </div>
        </nav>
    )
}

const handleSearchChange = (searchValue: string) => {
    return '';
};