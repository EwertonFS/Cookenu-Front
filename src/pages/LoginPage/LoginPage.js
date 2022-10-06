import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled";
import cookenu from "../../assets/cookenu.png";
import { Button } from "@mui/material";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <ScreenContainer>
      <LogoImage src={cookenu}></LogoImage>
      <LoginForm />
      <SignUpButtonContainer>
        <Link to={'/inscricao'}>
        <Button
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          margin="normal"
        >
          Não possui conta ? CADASTRE-SE
        </Button>
        </Link>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
