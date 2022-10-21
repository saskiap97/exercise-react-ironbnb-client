import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function ApartmentsList(props) {

    const [apartmentsList, setApartmentsList] = useState([])

    useEffect(() => {
        props.callbackToGetApartments()
    }, [])


    return (
        <div>
            <h1>ApartmentsList</h1>
            {props.apartments.map(apartment => {
                return (
                    <div key={apartment._id}>
                        <p>Name:{apartment.title}</p>
                        <p>Price per Day: {apartment.pricePerDay}</p>
                      <p><img src={apartment.img} alt="apartment" /> </p>
                        <Link to={`/apartments/${apartment._id}`}>Read details</Link>
                    </div>
                )
            })}
        </div>
    )
}