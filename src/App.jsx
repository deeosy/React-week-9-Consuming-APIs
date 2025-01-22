import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [] = useState([]);
  const getPhoto =async() => {
    try{
      const response = await axios("https://jsonplaceholder.typicode.com/photos")
      console.log(response.data);
      
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getPhoto()
  },[])

  return (
    <>
      <h2 className='text-red-500 text-7xl ' >API Call</h2>
    </>
  )
}

export default App
