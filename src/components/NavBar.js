import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <div>
            <NavLink to="apartments">View all Apartments | </NavLink>
            <NavLink to="/">Homepage| </NavLink>
            <NavLink to="apartments/create">Create An Apartment</NavLink>
        </div>
    )
}