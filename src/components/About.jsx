import home  from "../assets/home.png"

export default function About(){
    return(
        <section>
            <div>
                <img src={home} className="about-image"/>
            </div>
            <div className="about-text_container">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉) Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
                <div className="explore-container">
                    <h2>
                        Your destination is waiting.<br/>Your van is ready.
                    </h2>
                    <button>Explore our vans</button>
                </div>
            </div>
        </section>
    )
}