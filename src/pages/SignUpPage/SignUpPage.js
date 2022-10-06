import SignUpForm from "./SignUpForm"
import { LogoImage, ScreenContainer } from "./styled"
import cookenu from "../../assets/cookenu.png";


const SignUpPage = () => {
    return (
        <ScreenContainer>
        <LogoImage src={cookenu}/>
        <SignUpForm/>
        </ScreenContainer>
    )
    }
    
    export default SignUpPage