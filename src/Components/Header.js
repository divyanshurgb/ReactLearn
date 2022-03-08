import { Link } from "react-router-dom"

const Header = () => {
    return ( 
    <>
    <ul className="nav">
        <li>
            <Link to = '/'> Home </Link>
        </li>
        <li>
            <Link to = '/about'> About </Link>
        </li>
        <li>
            <Link to = '/profile'> Profile </Link>
        </li>
        <li>
            <Link to = '/Create'> Form </Link>
        </li>
        <li>
            <Link to = '/dropdowndata'> DropdownData </Link>
        </li>
    </ul>
        </>
    )
};

export default Header;
