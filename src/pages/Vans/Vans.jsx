import React from "react"
import { Link } from "react-router-dom"

export default function Vans() {

        
    const [vans, setVans] = React.useState([])
    
    const fetchVans = () => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
        .catch(error => console.log(error))
    }
    
    React.useEffect(() => {
        fetchVans()
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>
                        ${van.price}
                        <span>/day</span>
                    </p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
       
    ))

    return(
        <section className="vans-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </section>
    )
}