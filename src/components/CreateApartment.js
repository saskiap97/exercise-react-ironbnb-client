import { useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function CreateApartment(props) {

    const navigate =useNavigate();

    const [apartmentTitle, setApartmentTitle] = useState("")
    const [apartmentImage, setApartmentImage] = useState("")
    const [apartmentPPD, setApartmentPPD] = useState("")

    const addNewApartment = (newApartment) => {
        console.log(newApartment)
        return (
          axios.post(process.env.REACT_APP_API_URL+'apartments', newApartment)
            .then((response) => { navigate('/apartments') })
            .catch((error) => { console.log(error) })
        )
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newApartment = {
            title: apartmentTitle,
            img: apartmentImage,
            pricePerDay: apartmentPPD
        }
        addNewApartment(newApartment)
    }

    return (
        <div>
            <h3>Create Apartment Form:</h3>
            <form onSubmit={handleSubmit}>
                <label>Title of Apartment:</label>
                <input type="text" value={apartmentTitle} name="apartmentTitle" onChange={(e) => { setApartmentTitle(e.target.value) }} />
                <label>Image of Apartment:</label>
                <input type="text" value={apartmentImage} name="apartmentImage" onChange={(e) => { setApartmentImage(e.target.value) }} />
                <label>Price Per Day:</label>
                <input type="number" value={apartmentPPD} name="apartmentPPD" onChange={(e) => { setApartmentPPD(e.target.value) }} />
                <button type="submit">Submit form</button>
            </form>
        </div>
    )
}