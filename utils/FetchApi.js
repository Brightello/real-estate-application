import axios from 'axios'

export const baseUrl = "https://bayut.p.rapidapi.com"


  export const fetchApi = async(url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'c8afd3b61dmshe867effc2ba8195p140b4bjsn487ef4434659',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
      
    })
    return data;
  }