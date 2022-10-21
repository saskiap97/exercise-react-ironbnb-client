import axios from 'axios'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

export default function ApartmentDetails(){

const {id} = useParams()
// console.log(id)
const[apartmentDetails, setApartmentDetails] = useState([])


useEffect(()=>{
    axios.get(process.env.REACT_APP_API_URL+'apartments/'+id)
    .then((responseFromApi)=>{
        // console.log(responseFromApi.data);
        setApartmentDetails(responseFromApi.data)})
    .catch((err)=>{console.log(err)})
},[])

    return(
        <div>
        <h1>Apartment Deets</h1>
        <h2>{apartmentDetails.title}</h2>
        <p>Price per Day: {apartmentDetails.pricePerDay}</p>
         <p><img src={apartmentDetails.img} alt="apartment" /></p>
        </div>
    )
}