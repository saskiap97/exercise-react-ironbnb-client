import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavBar";
import HomePage from './components/HomePage';
import ApartmentsList from './components/ApartmentsList';
import ApartmentDetails from './components/ApartmentDetails';
import CreateApartment from './components/CreateApartment';
import { useState } from 'react';
import axios from 'axios'


function App() {


  const [apartmentsList, setApartmentsList] = useState([])

  const getApartments = () => {axios.get(process.env.REACT_APP_API_URL+'apartments')
  .then((responseFromApi) => {
      console.log(responseFromApi)
      setApartmentsList(responseFromApi.data)
  })
  .catch((err) => { console.log('error:', err) })}

  return <div className="App">
    <Navbar />

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/apartments' element={<ApartmentsList apartments={apartmentsList} callbackToGetApartments={getApartments}/>} />
      <Route path='/apartments/create' element={<CreateApartment />} />
      <Route path='/apartments/:id' element={<ApartmentDetails allApartments={apartmentsList}/>} />
    </Routes>

  </div>

}

export default App
