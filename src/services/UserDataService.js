import axios from "axios"

const  getUserData=async ()=>{
 const response = await axios.get("https://jsonplaceholder.typicode.com/users");
 if(response)
 {
    return response.data;
 }
 else return null;
}
export default getUserData;