import { Link } from "react-router-dom"

export default function Home(){
    return(
        <section className="home-container">
            <div className="home-text">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>
                    Add adventure to your life by joining the #vandwelling movement.
                </p>
                <p>
                    Rent the perfect van to make your perfect road trip.
                </p>
                <button>
                    <Link to="/vans" className="find-van">Find your van</Link>
                </button>
                
            </div>
        </section>
    )
}