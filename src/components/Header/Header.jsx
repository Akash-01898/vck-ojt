import {Link} from 'react-router-dom'
const Header = () =>{
    return(
        <div>
            <header>
                <nav>
                    <Link to= "/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/admission">Admision</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/not found">Not Found</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;