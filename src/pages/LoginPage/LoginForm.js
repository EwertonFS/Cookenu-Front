import {InputContainer} from "./styled";
import { Button, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/user";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const navigate= useNavigate()
 
  const onSubmitForm = (event) => {
    // console.log(form)
    event.preventDefault();
    login(body,login,navigate)
  };

  

  return (
    <InputContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          type={"email"}
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Password"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          type={"password"}
          required
        />
        <Link to={'/'}>
        <Button
          required
          type={"onSubmit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          Fazer Login
        </Button>
        </Link>
      </form>
    </InputContainer>
  );
};

export default LoginForm;
