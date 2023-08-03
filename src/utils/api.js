import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN= "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTc1ZDMzMzIyYjUwMjdiMzUyZjdlYTg4YmE0ZjY1ZiIsInN1YiI6IjY0YzIyMDJjMTNhMzIwMDBhZDRlOTNiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTr74Ao7dKJ0tCmdBp-JQv2yfnFxbi-mGTeiMsI_PMY"

const headers={
    Authorization: "bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async(url,params) => {
    try{
        const {data}=await axios.get(
            BASE_URL + url, {
                headers,
                params
            }
        )
        return data
            
        }
        
    catch(err)
    {
        console.log(err)
        return err
    }
}

