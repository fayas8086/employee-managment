import axios from "axios";
const URL='http://localhost:5005';
export const addUser=async (data)=>{
    try{
return await axios.post('$(URL)/add',data);
    }catch(erorr){
        console.log('Error while calling add user api',erorr);
    }
}