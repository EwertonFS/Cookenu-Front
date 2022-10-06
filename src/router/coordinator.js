import { useNavigate } from "react-router-dom"
    const navigate = useNavigate

export const goToRecipeList = ()=>{
        navigate('/')
}

export const goToLogin= ()=>{
    navigate('/login')
}