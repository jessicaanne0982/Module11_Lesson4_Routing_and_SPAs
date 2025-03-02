import { Link, NavLink } from "react-router-dom";

function NavigationBar() {
    return (
        <nav className="clear-fix">
            <NavLink to="/" activeclassname="active">Home</NavLink>
            <NavLink to="/browse-characters" activeclassname="active">Browse Characters</NavLink>
            <NavLink to="/comics" activeclassname="active">Comic</NavLink>
        </nav>
    );
};

export default NavigationBar;

