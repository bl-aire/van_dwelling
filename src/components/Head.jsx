import { Link } from "react-router-dom"

export default function Head(){
    return(
        <div>
            <nav className="head-container">
                <div>VAN_DWELLING</div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}