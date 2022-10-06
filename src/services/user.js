import axios from "axios";
import { goToRecipeList } from "../router/coordinator";
import { BASE_URL } from "../../constants/urls";
  
  
  //Seria a requisição se estivess funcionando Api Defasada
  export const login = (body, clear,navigate) =>{
    axios.post(`${BASE_URL}user/login`, form)
    .then((response)=>{
       console.log(response)
       localStorage.SetItem('token',response.data.token)
       clear()
       goToRecipeList('/')
    })
    .catch((error)=>{
      console.log(error)
      alert('erro no cadastro')
    })
  }