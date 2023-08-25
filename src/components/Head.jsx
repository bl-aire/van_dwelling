import { Link } from "react-router-dom"

export default function Head(){
    return(
        <header>
            <nav className="head-container">
                <Link to="/">VAN_DWELLING</Link>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/vans">Vans</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}