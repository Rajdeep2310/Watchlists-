import axios from "axios";

export const getMovie = async() => {
    try{
        const reqUrl = `https://www.omdbapi.com/?i=tt0372784&apikey=dd272563`
        const response = await axios.get(reqUrl)
        return response.data
    }catch(error){
        console.log(error)
    }
}
