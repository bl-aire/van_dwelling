import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {

    const [van, setVan] = React.useState([])
    const params = useParams()
    // console.log(params)...id:2

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return(
        <div>
            <p>{van.name}</p>
            <p>hi</p>
            <h2>hi</h2>
        </div>
    )
}