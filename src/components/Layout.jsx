import Foot from "./Foot"
import Head from "./Head"
import { Outlet } from "react-router-dom"

export default function Layout(){
    return(
        <div>
            <Head/>
            <Outlet/>
            <Foot/>
        </div>
    )
}